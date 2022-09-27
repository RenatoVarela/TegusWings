import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-config";
import "firebase/firestore";
import { useEffect } from "react";
import {useHistory} from "react-router-dom";

export default function DetalleProducto(props) {
  let history = useHistory();
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();
  const [detalle, setDetalle] = React.useState({});
  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    const itemS = await db
      .collection("Productos")
      .doc(props.match.params.slug)
      .get();
    setDetalle(itemS.data());
  };
  const regresaraction = async () => {
    history.push("/Menu");
  };
  
  function NewLine(){
    if(detalle.descripcion!==undefined){
 
    const text = detalle.descripcion;
    return text.split('\n').map(str => <p>{str}</p>);
    }
    
    
    
  } 

  return (
    <React.Fragment>
      <Grid className="conocenosForm">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <img src={detalle.imgProducto} width="70%"></img>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography
              style={{
                backgroundColor: "#f37e212e",
                padding: "3%",
                borderRadius: "18px",
              }}
              variant="h3"
              gutterBottom
            >
              {detalle.nombreProducto}
            </Typography>
            <hr></hr>
            <Typography variant="h6" gutterBottom>
              {NewLine()}
              
            </Typography>
            <Button
              style={{ marginTop: "5%", marginLeft: "70%" }}
              color="primary"
              onClick={regresaraction}
            >
              Regresar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}