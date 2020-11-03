import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, LinearProgress, Paper, Grow, Grid } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#8FBC8F'
        // backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 30,
    },
    container: {
      padding: 15,
    },
    paper: {
        height: 400,
        width: 1000,
    },
    title: {

    },
}));

const Skills = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);

    return (
        <div className={classes.root}>
            <Grow
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
            >
                <Paper className={classes.paper}>
                    <Grid container spacing={2} className={classes.container}>
                        <Grid item xs={12}>
                            <Typography variant="h3" color="primary">
                                Software Skills
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                JavaScript
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                Reactjs
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                Node.js
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={60} />
                        </Grid>
                    </Grid>

                </Paper>
            </Grow>
        </div>
    );

};

export default Skills;
