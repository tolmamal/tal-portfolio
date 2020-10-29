import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
    }
}));


const About = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h2" color="primary">
                About
            </Typography>
        </Paper>
    );


};

export default About;
