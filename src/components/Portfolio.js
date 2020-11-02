import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Box,
    Grow
} from "@material-ui/core";
import Project1 from '../components/Projects/Project1';

import projectImg from '../assets/images/tech.png';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
}));

const projects = [
    {
        name: 'Job Tracker',
        description: 'Manage and keep tracking your job applications',
        image: projectImg
    },
    {
        name: 'Job Tracker',
        description: 'Manage and keep tracking your job applications',
        image: projectImg
    },
    {
        name: 'Job Tracker',
        description: 'Manage and keep tracking your job applications',
        image: projectImg
    },
];

const Portfolio = () => {
    const classes = useStyles();

    const [checked, setChecked] = useState(true);

    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project1 />
                    </Grid>
                </Grow>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 2000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project1 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 3000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project1 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 4000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project1 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 5000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project1 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 6000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project1 />
                    </Grid>
                </Grow>
            </Grid>
        </Box>
    );

    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={8} md={4} key={index}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Code
                                </Button>
                                <Button size="small" color="primary">
                                    Live
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portfolio;
