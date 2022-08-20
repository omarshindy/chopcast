import React, {useState, useEffect} from "react";
import { makeStyles } from '@mui/styles';
import useAxios from 'axios-hooks'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import {useRecoilState, useRecoilValue} from 'recoil'
import {userIdAtom} from '../../atoms'
import {UserList} from "../Users/UserList"
import CircularProgress from '@mui/material/CircularProgress';
import {ChatList} from '../Chats/ChatList'
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
        axios.get("http://localhost:3000/api/users").then((res) => {
            setUsers(res.data)
        })
    }

    const fetchMessage = () => {
        axios.get("http://localhost:3000/api/" + userId + "/messages")
            .then((res) => {
                setMessages(res.data)
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

    useEffect(() => {
        setTimeout(() => {
            fetchMessage()
            fetchUsers()
        }, 30000)
    })

    const handleSubmit = () => {
        axios.post("http://localhost:3000/api/respond", {
            "chat_id": userId,
            "text": message
        }).then((res) => {
            console.log("res: ", res)
            setMessage("")
            fetchMessage()
        })



    }

    // if (loading) return <div><CircularProgress/></div>
    // if (error) return <h1>{error}</h1>
    // const spinner = <CircularProgress/>
    return (
        <div>
            <Grid container>
              <Grid item xs={12} >
                  <Typography variant="h5" className="header-message">Chat</Typography>
              </Grid>
          </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
             <UserList data={users}/>
            <Grid item xs={9}>
                <ChatList chats={messages}/>
                {/*<List className={classes.messageArea}>*/}

                {/*    <ListItem key="2">*/}
                {/*        <Grid container>*/}
                {/*            <Grid item xs={12}>*/}
                {/*                <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>*/}
                {/*            </Grid>*/}
                {/*            <Grid item xs={12}>*/}
                {/*                <ListItemText align="left" secondary="09:31"></ListItemText>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </ListItem>*/}
                {/*    <ListItem key="3">*/}
                {/*        <Grid container>*/}
                {/*            <Grid item xs={12}>*/}
                {/*                <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>*/}
                {/*            </Grid>*/}
                {/*            <Grid item xs={12}>*/}
                {/*                <ListItemText align="right" secondary="10:30"></ListItemText>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </ListItem>*/}
                {/*</List>*/}
                <Divider />

                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth onChange={handleChange} value={message} />
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

