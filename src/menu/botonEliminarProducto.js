import React from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-config";
import "firebase/firestore";

//ESTOS NO SE ELIMINAN, GENERAN ERROR
import storage from "../firebase";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export default function BotonEliminarServicio(props) {
  const [openMessage, setOpenMessage] = React.useState(false);
  const handleClickOpenMessage = () => {
    setOpenMessage(true);
  };

  const handleCloseMessage = () => {
    setOpenMessage(false);
  };

  const eliminarServicio = async () => {
    props.funcEliminar(props.id);
    let list2 = [];
    let listaFinal = [];

    // props.data.forEach((category) => {
    //   list2 = [];

    //   category.forEach((servic) => {
    //     if (servic.id != props.id) {
    //       list2.push(servic);
    //     }
    //   });

    //   listaFinal.push(list2);
    // });

    props.changedata(listaFinal);
    handleCloseMessage();
  };
  return (
    <React.Fragment>
      <Button size="small" color="primary" onClick={handleClickOpenMessage}>
        Eliminar
      </Button>
      <Dialog
        open={openMessage}
        onClose={handleCloseMessage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Estas seguro que deseas Eliminar este Servicio?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Una vez Confirmando este dato se eliminara
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMessage} color="primary">
            Cancelar
          </Button>
          <Button onClick={eliminarServicio} color="primary" autoFocus>
            Confirmacion
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
