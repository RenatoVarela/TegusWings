import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import ReactDOM from "react-dom";
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
import { Link } from "react-router-dom";
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
export default function PerfilAdmin() {
  const classes = useStyles();
  const firebase = useFirebaseApp();
  var user2 = getAuth(firebase).currentUser;

  const history = useHistory();

  const submit2 = () => {
    const auth = getAuth();

    auth.signOut().then(function (firebaseUser) {
      history.push("/");
      window.location.reload();
    });
  };
  const submit3 = () => {
    if (user2.email !== null) {
      if (user2.email === "teguswings@gmail.com") {
        return (
          <Link to="/Login" style={{ textDecoration: "none", color: "Blue" }}>
            Crear Nuevo Usuario
          </Link>
        );
      }
    }
  };

  return (
    <div>
      {user2 && (
        <Container component="main" maxWidth="sm">
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 6 } }}
          >
            <CssBaseline />
            {/* style={{ width: 500 }} */}
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Perfil
              </Typography>
              <Typography component="h1" variant="h5">
                Bienvenido: {user2.email}
              </Typography>
              <form className={classes.form} noValidate>
                <div>
                  <Button
                    onClick={submit2}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Cerrar Sesion
                  </Button>
                </div>

                <Grid container>
                  <Grid item>
                    <div>{submit3()}</div>
                  </Grid>

                  <Grid item>
                    <div></div>
                    <Link
                      to="/CambioPass"
                      style={{
                        textDecoration: "none",
                        color: "Blue",
                        marginLeft: 145,
                      }}
                    >
                      Cambio de Contraseña
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}></Box>
          </Paper>
        </Container>
      )}
    </div>
  );
}
