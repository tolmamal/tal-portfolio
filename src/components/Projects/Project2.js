import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, CardActionArea, Typography, CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
}));


const Project2 = () => {
    const classes = useStyles();

    const [projectName, setProjectName] = useState('Project 2');
    const [projectDescription, setProjectDescription] = useState('Project 2 - description');

    return (
        <Card className={classes.cardContainer}>
            <CardHeader title="Project 2">

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

export default Project2;
