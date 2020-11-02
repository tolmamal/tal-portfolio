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
import { IoLogoJavascript } from 'react-icons/io';
import { SiMaterialUi } from 'react-icons/si';


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
    }

}));




const Project5 = () => {
    const classes = useStyles();
    const [projectName, setProjectName] = useState('My Portfolio');
    const [projectDescription, setProjectDescription] = useState('My career portfolio. Here you can find my work & skills as a software developer.  ');


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
                            <Grid item xs={4}>
                                <Typography variant="h3">
                                    <FaReact />
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h3">
                                    <IoLogoJavascript />
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h3">
                                    <SiMaterialUi />
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
            <CardHeader title="My Portfolio" component={() => cardHeader()}>

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
                    href="https://github.com/tolmamal/tal-portfolio"
                    target={"_blank"}
                    rel="noopener"
                >
                    View Code
                </Button>
                <Button
                    size="small"
                    color="primary"
                    href="https://tal-galili-portfolio.netlify.app/"
                    target={"_blank"}
                    rel="noopener"
                >
                    Go Live
                </Button>
            </CardActions>
        </Card>
    );

};

export default Project5;
