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
import Project2 from '../components/Projects/Project2';
import Project3 from '../components/Projects/Project3';
import Project4 from '../components/Projects/Project4';
import Project5 from '../components/Projects/Project5';

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
                        <Project2 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 3000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project3 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 4000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project4 />
                    </Grid>
                </Grow>

                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 5000 } : {})}
                >
                    <Grid item xs={4}>
                        <Project5 />
                    </Grid>
                </Grow>

                {/*<Grow*/}
                {/*    in={checked}*/}
                {/*    style={{ transformOrigin: '0 0 0' }}*/}
                {/*    {...(checked ? { timeout: 6000 } : {})}*/}
                {/*>*/}
                {/*    <Grid item xs={4}>*/}
                {/*        <Project1 />*/}
                {/*    </Grid>*/}
                {/*</Grow>*/}
            </Grid>
        </Box>
    );

};

export default Portfolio;
