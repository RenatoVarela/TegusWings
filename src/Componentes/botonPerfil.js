import React from "react";

import { useFirebaseApp, useUser } from "reactfire";
import "firebase/auth";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(11),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const BotonPerfil = (props) => {
  const classes = useStyles();
  const firebase = useFirebaseApp();
  const history = useHistory();
  const admin = firebase.auth().currentUser;

  

  if (admin) {
    console.log(admin.email);
    return (
      <Link to="/Perfil" style={{ color: "white" }}>

        <Button >
          <Avatar style={{ background: "lightblue", width: '30px',
    height: '30px'}}>
{
  admin.email.substring(0,1)
}

          </Avatar>
        </Button>
      </Link>
    );
  } else if (!admin) {
    return (
      <Link to="/SignIn" style={{ color: "white" }}>
        Iniciar Sesion
      </Link>
    );
  }
};

export default withRouter(BotonPerfil);
