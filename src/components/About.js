import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button, Grow, Grid } from "@material-ui/core";
import emoji from'react-easy-emoji';
import { about } from '../Utils/data';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: 30,
    },
    container: {
        display: 'flex',
    },
    paper: {
        height: 400,
        width: 1100,
    },
    content: {
        padding: 15,
    },
    subTitle: {
        padding: 10,
        color: theme.palette.textPrimary.main
    },
    buttonSection: {
        margin: 120,
        padding: 10,
        paddingLeft: '60%'
    },
    socialSection: {
        marginLeft: 15,
        marginBottom: 40
    },
    bottom: {
        marginBottom: '3%',
    },



}));


const About = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Grow
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Paper elevation={4} className={classes.paper}>
                        <div className={classes.content}>
                            <Typography
                                variant="h4"
                                color="primary"
                                style={{ fontWeight: 'bold' }}
                            >
                                {' '}
                                {about.title}
                                {' '}
                                <span>{emoji("👋")}</span>
                            </Typography>
                            <Typography variant="h5" className={classes.subTitle}>
                                {about.subTitle}
                            </Typography>
                        </div>

                        <div className={classes.buttonSection}>
                            <Button
                                variant="contained"
                                color="primary"
                                href={about.resumeLink}
                                target={"_blank"}

                            >
                                See my resume
                            </Button>
                        </div>
                    </Paper>
                </Grow>
            </div>
        </div>
    );


};

export default About;
