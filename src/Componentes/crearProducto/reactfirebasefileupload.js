import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { storage } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Fab } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
const ReactFirebaseFileUpload = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (image) {
      handleUpload();
    }
  }, [image]);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type == "image/png" ||
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/jpg"
      ) {
        setImage(e.target.files[0]);
      } else {
        alert("Imagen invalida. Formatos aceptados: jpg o png");
      }
    }
  };

  const [openCamError, setCamError] = React.useState(false);
  const handleMessageErrorCamara = () => {
    setCamError(true);
  };

  const handleCloseErrorMessageCamera = () => {
    setCamError(false);
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            props.setProfileUrl(url);
          });
      }
    );
    handleMessageErrorCamara();
    setTimeout(() => {
      handleCloseErrorMessageCamera();
    }, 3000);
  };

  return (
    <Grid container spacing={3}>
      <Dialog
        open={openCamError}
        onClose={handleCloseErrorMessageCamera}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Espere un momento"}</DialogTitle>
        <DialogContent>
          <CircularProgress color="secondary"></CircularProgress>
          <DialogContentText id="alert-dialog-description">
            Subiendo Imagen
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      <Grid item xs={12} sm={2}>
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={handleChange}
          />
          <Button
            color="primary"
            width=" 144px"
            component="span"
            aria-label="add"
            variant="contained"
          >
            Subir Imagen
            <PhotoCamera style={{ marginLeft: "5px" }} />
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
export default ReactFirebaseFileUpload;
