import React, { Component } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'

export const Chat = ({align, text, image}) => {
    return (
        <ListItem key="1">
            <Grid item xs={12}>
                {
                    image ? <img align={align} src={image} alt="media" /> : <ListItemText align={align} primary={text}></ListItemText>
                }
            </Grid>
        </ListItem>
    )
}
