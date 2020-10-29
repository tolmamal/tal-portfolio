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
import { SiFirebase } from 'react-icons/si';
import { SiMaterialUi } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

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
        paddingTop: '8px'
    }

}));




const Project1 = () => {
    const classes = useStyles();
    const [projectName, setProjectName] = useState('Job Tracker');
    const [projectDescription, setProjectDescription] = useState('Manage and keep tracking your job applications');


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
                            <Grid item xs={3}>
                                <Typography variant="h3">
                                    <FaReact />
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h3">
                                    <SiJavascript />
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h3">
                                    <SiRedux />
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h3">
                                    <SiFirebase />
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
            <CardHeader title="Job Tracker" component={() => cardHeader()}>

            </CardHeader>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {projectDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href="https://github.com/tolmamal/job-tracker-app"
                    target={"_blank"}
                    rel="noopener"
                >
                    View Code
                </Button>
                <Button
                    size="small"
                    color="primary"
                    href="https://job-tracker-site.netlify.app/"
                    target={"_blank"}
                    rel="noopener"
                >
                    Go Live
                </Button>
            </CardActions>
        </Card>
    );

};

export default Project1;
