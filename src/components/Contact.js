import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
    Typography,
    Box,
    Grid,
    TextField,
    InputAdornment,
    Button,
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";
import emailjs from 'emailjs-com';

import { BsPerson } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';
import { FaRegCheckCircle } from 'react-icons/fa';

const service_id = 'service_8t1k0qn';
const template_id = 'template_5q4c4sj';
const user_id = 'user_F8aQ79apN6EdlSqcIfuii';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    mainGrid: {
        justifyContent: 'center',
        marginTop: '4%'
    },
    form: {
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    input: {
        color: "#fff",
    },
    dialog: {
        width: '70%',
        height: '70%',
        position: 'absolute',
        marginTop: '7%',
        marginLeft: '15%'
    },
    dialogIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '40%',
        padding: 10
    },
    dialogTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                color: "#fff",
                borderColor: "tan",
            },
        },
    },
})(TextField);

const HandleEmail = props => {
    const { onClose, open } = props;
    const classes = useStyles();

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Dialog
            onClose={onClose}
            aria-labelledby="simple-dialog-title"
            open={open}
            className={classes.dialog}
        >
            <DialogTitle>
                <Typography variant="h4" color="primary" className={classes.dialogTitle}>
                    Thank You! <br />
                </Typography>
                <Typography variant="h6" color="primary" style={{ textAlign: 'center' }}>
                    I'll make sure to contact you back soon as possible.
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography
                    variant="h2"
                    color="primary"
                    className={classes.dialogIcon}
                    >
                        <FaRegCheckCircle />
                </Typography>
            </DialogContent>
        </Dialog>
    );



};


const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clearAllInputs = () => {
        setName('');
        setEmail('');
        setMessage('');
    };


    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submitHandler - contact form");
        handleClickOpen();

        let data = {
            from_name: name,
            from_email: email,
            message_content: message
        };


        emailjs.send(service_id, template_id, data, user_id)
            .then(
                function (response) {
                    console.log(response);

                },
                function (err) {
                    console.log(err);
                }
            );

        clearAllInputs();

    };


    return (
        <Box className={classes.root}>
            <Grid container className={classes.mainGrid}>
                <Typography variant="h3" color="primary">
                    Reach Out to me!
                </Typography>
                {/*<Typography variant="h5" color="secondary">*/}
                {/*    Hire me, discuss a project or just want to say hi? my inbox is open to all.*/}
                {/*</Typography>*/}
                <Box className={classes.form}>
                    <form onSubmit={submitHandler}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <InputField
                                    id="name-input"
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    inputProps={{ className: classes.input }}
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <InputField
                                    id="email-input"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    inputProps={{ className: classes.input }}
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField
                                    id="msg-input"
                                    label="Message"
                                    variant="outlined"
                                    fullWidth
                                    rows={4}
                                    multiline
                                    inputProps={{ className: classes.input }}
                                    onChange={e => setMessage(e.target.value)}
                                    value={message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<BiSend />}
                                    fullWidth
                                    onSubmit={submitHandler}
                                    type="submit"
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                    <HandleEmail open={open} onClose={handleClose} />

                </Box>
            </Grid>
        </Box>
    );


};

export default Contact;
