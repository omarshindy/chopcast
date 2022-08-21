import React, {useState, useEffect, useRef} from "react";
import { makeStyles } from '@mui/styles';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import {useRecoilValue} from 'recoil'
import {userIdAtom} from '../../atoms'
import {UserList} from "../Users/UserList"
import {ChatList} from '../Chats/ChatList'
import RefreshIcon from '@mui/icons-material/Refresh';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '100vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto'
    },
    Paper: {
        border: 0
    }
});

export const Home = () => {
    const userId = useRecoilValue(userIdAtom)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        axios.get("/api/users").then((res) => {
            setUsers(res.data)
        })
    }

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        const offsetBottom = messagesEndRef.current.offsetTop + ref.current.offsetHeight;
        window.scrollTo({ top: offsetBottom });
  
    }

    const fetchMessage = () => {
        axios.get("/api/" + userId + "/messages")
            .then((res) => {
                setMessages(res.data)
                scrollToBottom()
            })
    }

    useEffect(() => {
        fetchMessage()
        fetchUsers()
    }, [userId])

    const classes = useStyles();

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const refresh = () => {
        fetchMessage()
        fetchUsers()
    }

    useEffect(() => {
        setTimeout(() => {
            refresh()
        }, 60000)
    })

    const handleEnter = (e) => {
        if (e.keyCode === 13){
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        axios.post("/api/respond", {
            "chat_id": userId,
            "text": message
        }).then((res) => {
            setMessage("")
            fetchMessage()
        })
    }

    return (
        <div>
            <Grid container>
            
              <Grid item xs={3} >
                 <Grid container>
                    <Grid item xs={6} style={{ flexGrow: "1" }}> 
                        <Typography variant="h5" align="left">Chat</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" align="right" sx={{
                            paddingRight: '25px'
                        }}> 
                            <RefreshIcon onClick= {(refresh)}  />
                        </Typography>
                    </Grid>
                 </Grid>
              </Grid>
          </Grid>
          
        <Grid container component={Paper} className={classes.chatSection}>
             <UserList data={users}/>
            <Grid item xs={9}>
                <ChatList ref={messagesEndRef} chats={messages}/>
                <Divider />

                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth onChange={handleChange} onKeyDown={handleEnter} value={message} />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add" onClick={handleSubmit}><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
    );
}
