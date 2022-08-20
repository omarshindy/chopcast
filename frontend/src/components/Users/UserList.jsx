import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import {User} from './User'
const useStyles = makeStyles({
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    }
});


export const UserList = ({data}) => {
    const classes = useStyles();
    return (
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    {
                        data.map((user) => {
                            return (
                                <User name={user.username} id={user.user_id} />
                            )
                        })
                    }
                </List>
            </Grid>
    )
}