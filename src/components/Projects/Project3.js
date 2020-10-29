import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, CardActionArea, Typography, CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
}));


const Project3 = () => {
    const classes = useStyles();

    const [projectName, setProjectName] = useState('Project 3');
    const [projectDescription, setProjectDescription] = useState('Project 3 - description');

    return (
        <Card className={classes.cardContainer}>
            <CardHeader title="Project 3">

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

export default Project3;
