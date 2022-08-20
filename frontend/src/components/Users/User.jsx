import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useRecoilState } from "recoil";
import { userIdAtom } from '../../atoms'

export const User = (props) => {
    const [user, setUser] = useRecoilState(userIdAtom);

    return (
        <ListItem button key={props.id} onClick={() => {
            setUser(props.id);
        }}>
            <ListItemText primary={props.name? "@" + props.name : "User"} ></ListItemText>
        </ListItem>
    )
}