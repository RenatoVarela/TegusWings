import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import storage from "../firebase";
import Paper from "@mui/material/Paper";
import Container from "@material-ui/core/Container";
import { useEffect, useState } from "react";
import ReactFirebaseFileUpload from "./crearProducto/reactfirebasefileupload";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-config";
import "firebase/firestore";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};

export default function ModificarProducto(props) {
  const classes = useStyles();
  let history = useHistory();
  
  const [imgProducto, setimgProducto] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [nombreProducto, setNombreProducto] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [precio, setAlerta2] = React.useState(0);
  const [categoria1, setCategoria1] = React.useState("");
  const [id, setId] = React.useState("");
  const [categorias, setCategorias] = React.useState([]);
  const [openMessage, setOpenMessage] = React.useState(false);
  const [openMessage2, setOpenMessage2] = React.useState(false);
  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const [error3, setError3] = React.useState(false);
  const [errorName, setErrorName] = React.useState("Nombre Producto");
  const [errorDescripcion, setErrorDescripcion] = React.useState(
    "Descripcion Producto"
  );
  const handleClickOpenMessage = () => {
    setOpenMessage(true);
  };
  const regresaraction = async () => {
    handleCloseMessage2();
    history.push({ pathname: "/Menu", state: { valor: 0 } });
  };
  const handleCloseMessage = () => {
    setOpenMessage(false);
  };
  const handleClickOpenMessage2 = () => {
    setOpenMessage2(true);
  };

  const handleCloseMessage2 = () => {
    setOpenMessage2(false);
  };

  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    let obj1;
    let obj;
    let objf;
    const querySnapshot = await db.collection("Productos").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;

      if (obj.id == props.match.params.slug) {
        objf = obj;
      }
    });
    setId(props.match.params.slug);
    setNombreProducto(objf.nombreProducto);

    setimgProducto(objf.imgProducto);
    setDescripcion(objf.descripcion);
    setAlerta2(objf.precio);
  };

  const guardarProducto = async () => {
    debugger;
    const pasa= descripcion.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+[a-zA-ZÀ-ÿ\u00f1\u00d1_ \s 0-9 , .]*$/);
    const pasaNombre= nombreProducto.match(/^([a-zA-ZÀ-ÿ])+([\s] | [a-zA-ZÀ-ÿ]+)*$/);
    //LEMME IN /^(([a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+[(/s)])|[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+)+$/
   
    if (nombreProducto == "" || !pasaNombre) {
      setError1(true);
      if (nombreProducto == "") {
        setErrorName("Nombre obligatorio");
      } else {
        setErrorName("Nombre con caracteres erroneos");
      }
    } else {
      setError1(false);
      setErrorName("Nombre Producto");
    }
    if (descripcion == "" || !pasa) {
      setError2(true);
      if (descripcion == "") {
        setErrorDescripcion("Descripcion obligatoria");
      } else {
        setErrorDescripcion("Descripcion con carateres erroneos");
      }
    } else {
      setError2(false);
      setErrorDescripcion("Descripcion Producto");
    }

    handleCloseMessage();
    let categoria;
    if (nombreProducto != "" && descripcion != "" && pasa && pasaNombre) {
      categorias.forEach((doc) => {
        if (categoria1 === doc.Nombre) {
          categoria = doc.id;
        }
      });
      let obj = { descripcion, imgProducto, nombreProducto, precio };
      db.collection("Productos").doc(id).set(obj);
      history.push({ pathname: "/Menu", state: { valor: 0 } });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const setProfileUrl = (nombreUrl) => {
    setimgProducto(nombreUrl);
  };
  const handleDescripcion = (e) => {
    if (e.target.value.length < 420 && e.target.value !== " ") {
      setDescripcion(e.target.value);
    }
  };
  const handleAlerta1 = (e) => {
    if (e.target.value > 0 && e.target.value !== null && e.target.value < 2000) {
      setAlerta2(parseInt(e.target.value));
    }
  };
  const handleNombre = (e) => {
    if (e.target.value.length < 45 && e.target.value !== " ") {
      setNombreProducto(e.target.value);
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="md">
      <Grid className="conocenosForm">
      <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 6 } }}
          >
        <Typography variant="h6" gutterBottom>
          Modificar Producto
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <img src={imgProducto} width="10%"></img>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ReactFirebaseFileUpload
              profilePicture={imgProducto}
              setProfileUrl={setProfileUrl}
              setError={setError3}
            ></ReactFirebaseFileUpload>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              error={error1}
              id="nombreProducto"
              name="nombreProducto"
              label={errorName}
              fullWidth
              autoComplete="given-name"
              onChange={(e) => handleNombre(e)}
              value={nombreProducto}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              error={error2}
              id="descripcionProducto"
              name="descripcionProducto"
              label={errorDescripcion}
              fullWidth
              autoComplete="family-name"
              onChange={(e) => handleDescripcion(e)}
              value={descripcion}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            style={{ marginTop: "3%" }}
            required
            id="alerta"
            name="alerta"
            label="Precio"
            type="number"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => handleAlerta1(e)}
            value={precio}
          />
        </Grid>
        
        </Grid>

        <Button
          style={{ marginTop: "5%" }}
          variant="contained"
          color="secondary"
          onClick={handleClickOpenMessage}
        >
          Guardar
        </Button>
        <Dialog
          open={openMessage}
          onClose={handleCloseMessage}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¿Estas seguro que deseas modificar este Producto?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Una vez Confirmando este dato se guardara
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseMessage} color="primary">
              Cancelar
            </Button>
            <Button onClick={guardarProducto} color="primary" autoFocus>
              Confirmacion
            </Button>
          </DialogActions>
        </Dialog>

        <Button
          style={{ marginTop: "5%", marginLeft: "2%" }}
          variant="contained"
          color="primary"
          onClick={handleClickOpenMessage2}
        >
          Regresar
        </Button>
        <Dialog
          open={openMessage2}
          onClose={handleCloseMessage2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¿Estas seguro que deseas Regresar?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Una vez Confirmando estos datos se perderan
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseMessage2} color="primary">
              Cancelar
            </Button>
            <Button onClick={regresaraction} color="primary" autoFocus>
              Confirmacion
            </Button>
          </DialogActions>
        </Dialog>
        </Paper>
      </Grid>
      </Container>
    </React.Fragment>
  );
}