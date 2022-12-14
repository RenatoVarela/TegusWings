import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Singin from "./SingIn";
import Grid from "@material-ui/core/Grid";
import Paper from "@mui/material/Paper";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  var contra = props.pass;
  const firebase = useFirebaseApp();
  const [email, setEmail] = useState("");
  const [openMessage, setOpenMessage] = React.useState(false);
  const [openMessage2, setOpenMessage2] = React.useState(false);
  const [password2, setPassword2] = useState("");
  const history = useHistory();

  const [state, setState] = React.useState({
    checkedA: false,
  });
  var contra = "";
  const [rol, setrol] = useState(false);

  const [inputValue, setInputValue] = React.useState("");
  const secretaria = async () => {
    const opcion = "true";

    let obj = { email, opcion };
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const getDatos2 = async () => {};
  const submit = () => {
    getDatos2();
    const user2 = firebase.auth().currentUser;
    var email2 = user2.email;

    firebase.auth().createUserWithEmailAndPassword(email,password2).then(function(firebaseUser) {
      firebase.auth().signInWithEmailAndPassword(email2, contra)
        handleClickOpenMessage();
        handleClickOpenMessage();
        history.push("/");
        // ...
      })
      .catch(function (error) {
        handleClickOpenMessage2();
      });
  };
  const handleClickOpenMessage = () => {
    setOpenMessage(true);
  };

  const handleCloseMessage = () => {
    secretaria();
    setOpenMessage(false);

    history.push("/Perfil");
    //window.location.reload();
  };

  const handleClickOpenMessage2 = () => {
    setOpenMessage2(true);
  };

  const handleCloseMessage2 = () => {
    setOpenMessage2(false);
    // user2=null;
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
            Registrarse
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <div>
                <br />
              </div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contrase??a"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(ev) => setPassword2(ev.target.value)}
              />
            </Grid>
            <Button
              //type="submit"
              onClick={submit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
            <Dialog
              open={openMessage2}
              onClose={handleCloseMessage2}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"??Error en creaci??n de cuenta nueva?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Intente de nuevo
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseMessage2} color="primary">
                  Confirmacion
                </Button>
              </DialogActions>
            </Dialog>

            <Grid>
              <Grid item>
                <Link
                  to="/Perfil"
                  style={{ textDecoration: "none", color: "Blue" }}
                >
                  Volver
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
