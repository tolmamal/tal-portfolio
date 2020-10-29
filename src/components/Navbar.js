import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import avatar from '../assets/images/avatar.png';
import Footer from '../components/Footer';
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

//icons
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';

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
    menuIcon: {
        color: "tomato",
    },

}));

const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <InfoIcon />, listText: "About", listPath: "/about" },
    { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
    { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];



const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Tal Galili "/>
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem
                        button
                        key={index}
                        className={classes.listItem}
                        onClick={() => setOpen(false)}
                        component={Link}
                        to={item.listPath}
                    >
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Box component="nav">
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                {sideList()}
                <Footer />
            </Drawer>
        </React.Fragment>
    );
};

export default Navbar;
