import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@mui/material/Paper";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import 'firebase/auth';
import { Link } from "react-router-dom";
import { useFirebaseApp } from "reactfire";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotPass() {
  const [email, setEmail] = useState("");

  const [openMessage, setOpenMessage] = React.useState(false);
  const [openMessage2, setOpenMessage2] = React.useState(false);
  const firebase = useFirebaseApp();
  const history = useHistory();

  var auth = firebase.auth();

  const PasswordRecover = () => {
    auth.sendPasswordResetEmail(email).then(function() {
      // Email sent.
      handleClickOpenMessage();
    }).catch(function(error) {
      // An error happened.
    });
  };
  const handleClickOpenMessage = () => {
    setOpenMessage(true);
  };

  const handleCloseMessage = () => {
    setOpenMessage(false);
    history.push("/SignIn");
  };

  const handleClickOpenMessage2 = () => {
    setOpenMessage2(true);
  };

  const handleCloseMessage2 = () => {
    setOpenMessage2(false);
    history.push("/SignIn");
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 6 } }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Perdiste Tu Contrase??a
          </Typography>
          <Typography component="h1" variant="subtitle2">
            ??Perdiste tu contrase??a? Ingrese su direcci??n de correo electr??nico.
            Recibir?? un enlace para crear una nueva contrase??a por correo
            electr??nico.
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electr??nico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(ev) => setEmail(ev.target.value)}
            />

            <Button
              onClick={PasswordRecover}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Restablecer Contrase??a
            </Button>
            <Dialog
              open={openMessage}
              onClose={handleCloseMessage}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Reestablecimiento de contrase??a"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Su correo para la recuperaci??n de contrase??a fue enviado
                  correctamente
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseMessage} color="primary">
                  Confirmacion
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog
              open={openMessage2}
              onClose={handleCloseMessage2}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Reestablecimiento de contrase??a incorrecto"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  El correo ingresado para la recuperaci??n de contrase??a no esta
                  registrado
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseMessage2} color="primary">
                  Confirmacion
                </Button>
              </DialogActions>
            </Dialog>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  to="/SignIn"
                  style={{ textDecoration: "none", color: "Blue" }}
                >
                  "??Recuerdas tu contrase??a? Iniciar Sesi??n"
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Paper>
    </Container>
  );
}
