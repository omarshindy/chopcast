import React, { Component } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'

export const Chat = ({align, text}) => {
    return (
        <ListItem key="1">
            <Grid item xs={12}>
                <ListItemText align={align} primary={text}></ListItemText>
            </Grid>
        </ListItem>
    )
}


