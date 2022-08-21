import React from 'react'
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import {Chat} from './Chat'
const useStyles = makeStyles({
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    },
    Paper: {
        border: 0
    }
});

export const ChatList = ({chats}) => {
    const classes = useStyles()
    if(chats){
        return (
            <List className={classes.messageArea}>
                {
                    chats.map((chat) => {
                        return (
                            <Chat key={chat.id} align={chat.admin ? "left" : "right"} text={chat.text} image={chat.media_link} />
                        )
                    })
                }
            </List>
        )
    } else {
        return (<div></div>)
    }
}