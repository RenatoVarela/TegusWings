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
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import ReactFirebaseFileUpload from "./reactfirebasefileupload";
//import firebase from "firebase";
import firebaseConfig from "../../firebase-config";
import "firebase/firestore";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// const db = firebase.firestore();
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

export default function CrearProducto() {
  const classes = useStyles();
  let history = useHistory();

  const [imgService, setimgService] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [nombreProducto, setNombreProducto] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [categoria1, setCategoria1] = React.useState("None");
  const [categorias, setCategorias] = React.useState([]);
  const [error1, setError1] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const [error3, setError3] = React.useState(false);
  const [error4, setError4] = React.useState(false);
  const [errorName, setErrorName] = React.useState("Nombre Producto");
  const [errorDescripcion, setErrorDescripcion] = React.useState(
    "Descripcion Producto"
  );
  useEffect(() => {
    getDatos();
  }, []);
  const getDatos = async () => {};
  //     let obj;
  //     let list = [];
  //     const querySnapshot = await db.collection("Categorias").get();
  //     querySnapshot.forEach((doc) => {
  //       obj = doc.data();
  //       obj.id = doc.id;
  //       list.push(obj);
  //     });
  //     setCategorias(list);
  //   };
  const guardarProducto = async () => {};
  //   const guardarProducto = async () => {
  //     const pasa = descripcion.match(
  //       /^[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+[a-zA-ZÀ-ÿ\u00f1\u00d1_ \s 0-9 , .]*$/
  //     );
  //     const pasaNombre = nombreProducto.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]*$/);
  //     const pasaNombre2 = nombreProducto.match(/^(\w+\s?)*\s*$/);
  //     if (imgService == "") {
  //       setError3(true);
  //     } else {
  //       setError3(false);
  //     }
  //     if (nombreProducto === "" || !pasaNombre || !pasaNombre2) {
  //       setError1(true);
  //       if (nombreProducto === "") {
  //         setErrorName("Nombre obligatorio");
  //       } else {
  //         setErrorName("Nombre con caracteres erroneos");
  //       }
  //     } else {
  //       setError1(false);
  //       setErrorName("Nombre Producto");
  //     }
  //     if (descripcion === "" || !pasa) {
  //       setError2(true);
  //       if (descripcion === "") {
  //         setErrorDescripcion("Descripcion obligatoria");
  //       } else {
  //         setErrorDescripcion("Descripcion con carateres erroneos");
  //       }
  //     } else {
  //       setError2(false);
  //       setErrorDescripcion("Descripcion Producto");
  //     }
  //     if (categoria1 === "None") {
  //       setError4(true);
  //     } else {
  //       setError4(false);
  //     }
  //     handleCloseMessage();
  //     let categoria;
  //     if (
  //       imgService !== "" &&
  //       nombreProducto !== "" &&
  //       descripcion !== "" &&
  //       pasa &&
  //       pasaNombre &&
  //       pasaNombre2 &&
  //       categoria1 !== "None"
  //     ) {
  //       categorias.forEach((doc) => {
  //         if (categoria1 === doc.Nombre) {
  //           categoria = doc.id;
  //         }
  //       });
  //       const obj = { categoria, descripcion, imgService, nombreProducto };
  //       await db.collection("Productos").add(obj);
  //       history.push({ pathname: "/Productos", state: { valor: 0 } });
  //     }
  //   };

  const regresaraction = async () => {
    handleCloseMessage2();
    history.push("/Productos");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const setProfileUrl = (nombreUrl) => {
    setimgService(nombreUrl);
  };

  const [openMessage, setOpenMessage] = React.useState(false);
  const [openMessage2, setOpenMessage2] = React.useState(false);
  const handleClickOpenMessage = () => {
    setOpenMessage(true);
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
  const handleDescripcion = (e) => {
    if (e.target.value.length < 420 && e.target.value !== " ") {
      setDescripcion(e.target.value);
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
              Ingresar Producto
            </Typography>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="body2"
                gutterBottom
                style={error3 ? { color: "red" } : { display: "none" }}
              >
                *Imagen no seleccionada
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <img src={imgService} width="10%"></img>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <ReactFirebaseFileUpload
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

              <Grid item xs={12} sm={12}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={error4 ? { color: "red" } : { display: "none" }}
                >
                  *Categoria no seleccionada
                </Typography>
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
                {"¿Estas seguro que deseas crear este Producto?"}
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
