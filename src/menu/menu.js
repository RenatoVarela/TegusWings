import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-config";
import "firebase/firestore";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import FullWidthTabs from "./tabs";
import { useHistory } from "react-router-dom";
import { useFirebaseApp, useUser } from "reactfire";
import "firebase/auth";
import { useLocation } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container: {
    margin: "2% 4%",
  },
  media: {
    height: 140,
  },
});

export default function Menu() {
  const [servicio, setServicio] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  const [valor, setValor] = React.useState(
    location.state ? location.state.valor : 0
  );
  const admin = firebase.auth().currentUser;
  useEffect(() => {
    getCategorias();
    getDatos2();
  }, []);
  const [flag, setflag] = useState(false);
  const getDatos2 = async () => {
    if (admin !== null) {
      setflag(true);
    } else {
      setflag(false);
    }
  };

  const getCategorias = async () => {
    let obj;
    let list = [];

    const products = await db.collection("Productos").get();
    products.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      list.push(obj);
    });
    setCategorias(list);

    setServicio(list);
  };

  const eliminarServicio = async (id) => {
    const res = await db.collection("Productos").doc(id).delete();
    getCategorias();
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <h1>Menú</h1>
        </Grid>
        <Grid item xs={12} sm={4}>
          {flag && (
            <Button
              style={{ marginTop: "2%", marginLeft: "20%" }}
              variant="contained"
              color="primary"
              // onClick={handleClickOpenMessage}
            >
              <Link style={{ color: "white" }} to={"/CrearProducto"}>
                Agregar Producto
              </Link>
            </Button>
          )}
        </Grid>
      </Grid>
      <FullWidthTabs
        value={valor}
        setValue={setValor}
        eliminar={eliminarServicio}
        servicios={servicio}
        // refresh={getCategorias}
        setService={setServicio}
      ></FullWidthTabs>
    </div>
  );
}
