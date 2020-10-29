import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, BottomNavigation, BottomNavigationAction } from "@material-ui/core";


//icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const githubURL = "https://github.com/tolmamal";
const linkedinURL = "https://www.linkedin.com/in/tal-galili-8155a8102/";


const useStyles = makeStyles({
    bottomNavContainer: {
        background: "#222",
    },
    root: {
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem",
            },
        },
    },
});

const Footer = () => {
    const classes = useStyles();

    const GithubHandler = () => (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={githubURL}
        >
        </Link>
    );


    return (
        <BottomNavigation className={classes.bottomNavContainer}>
            <BottomNavigationAction
                icon={<GitHubIcon />}
                className={classes.root}
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
            />
            <BottomNavigationAction
                icon={<LinkedInIcon />}
                className={classes.root}
                href={linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
            />
            <BottomNavigationAction
                icon={<EmailIcon />}
                className={classes.root}
                target={"_blank"}
                href={"mailto:tolmamal@gmail.com"}
            />
        </BottomNavigation>
    );
};
export default Footer;
