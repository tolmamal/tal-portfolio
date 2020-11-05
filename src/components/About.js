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
        [theme.breakpoints.up('md')]: {
            height: 400,
            width: 1000,
        },
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
        marginLeft: '80px',
        paddingTop: 5,
        [theme.breakpoints.up('md')]: {
            marginLeft: '70%',
            margin: 120,
            padding: 10

        },
    },
    mainGrid: {
        padding: 10,

    }

}));


const About = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);

    return (
        <Grid container className={classes.mainGrid}>
            <Grow
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
            >
                <Paper className={classes.content}>
                    <Grid item xs={12}>
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
                        <Typography variant="h6" className={classes.subTitle}>
                            {about.subTitle}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.bottom}>
                        <Button
                            variant="contained"
                            color="primary"
                            href={about.resumeLink}
                            target={"_blank"}

                        >
                            See my resume
                        </Button>
                    </Grid>
                </Paper>
            </Grow>

        </Grid>
    );
};

export default About;
