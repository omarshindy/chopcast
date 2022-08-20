import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
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
                            <Chat align={chat.admin ? "left" : "right"} text={chat.text} />
                        )
                    })
                }
            </List>
        )
    } else {
        return (<div></div>)
    }
}