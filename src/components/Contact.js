import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
    }
}));


const Contact = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h2" color="primary">
                Contact
            </Typography>
        </Paper>
    );


};

export default Contact;
