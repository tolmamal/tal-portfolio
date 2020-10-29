import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, CardActions, CardActionArea ,Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
}));


const Project1 = () => {
    const classes = useStyles();
    const [projectName, setProjectName] = useState('Job Tracker');
    const [projectDescription, setProjectDescription] = useState('Manage and keep tracking your job applications');

    return (
        <Card className={classes.cardContainer}>
            <CardHeader title="Job Tracker">

            </CardHeader>
            <CardActionArea>
                <CardContent>
                    <Typography></Typography>
                    <Typography></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
    );

};

export default Project1;
