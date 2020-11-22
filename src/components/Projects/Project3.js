import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card,
    CardHeader,
    CardContent,
    CardActions,
    CardActionArea,
    Button,
    Typography,
    AppBar,
    Toolbar,
    Grid,
} from "@material-ui/core";
//icons
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';


const useStyles = makeStyles((theme) => ({
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
    header: {
        backgroundColor: '#8FBC8F'
        // backgroundColor: 'tomato'
    },
    cardFooter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    skills: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8px',
        textAlign: 'center'
    },
    cardContent: {
        padding: '4px'
    },
    cardActions: {
        display: 'block',
    }

}));




const Project3 = () => {
    const classes = useStyles();
    const [projectName, setProjectName] = useState('Job Matcher - Client');
    const [projectDescription, setProjectDescription] = useState('A web application that analyze user resume and matches job opportunities ');


    const cardHeader = () => {
        return (
            <div>
                <AppBar position="static" className={classes.header}>
                    <Toolbar>
                        <Grid
                            container
                            id="skills-section"
                            xs={12}
                            spacing={1}
                            className={classes.skills}
                        >
                            <Grid item xs={6}>
                                <Typography variant="h5">
                                    <FaReact />
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5">
                                    <SiJavascript />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );

    };

    return (
        <Card className={classes.cardContainer}>
            <CardHeader title="Job Matcher Client" component={() => cardHeader()}>

            </CardHeader>
            <CardActionArea>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {projectDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    href="https://github.com/tolmamal/job-matcher-client"
                    target={"_blank"}
                    rel="noopener"
                >
                    View Code
                </Button>
                {/*<Button*/}
                {/*    size="small"*/}
                {/*    color="primary"*/}
                {/*    href="https://flamboyant-leavitt-b6c856.netlify.app/"*/}
                {/*    target={"_blank"}*/}
                {/*    rel="noopener"*/}
                {/*>*/}
                {/*    Go Live*/}
                {/*</Button>*/}
            </CardActions>
        </Card>
    );

};

export default Project3;
