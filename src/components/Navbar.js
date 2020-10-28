import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import avatar from '../assets/images/avatar.png';
import {
    Drawer,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#222",
        margin: 0,
    },
    title: {
        color: "tan",
    },
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "tan",
    },

}));




const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Tal Galili "/>
            <Divider />
            <List>

            </List>
        </Box>
    );

    return (
        <div>

        </div>
    );


};

export default Navbar;
