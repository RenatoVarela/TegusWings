import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MapFooter from "../Componentes/footerMapa";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: "300px",
    height: "300px",
    marginTop: "30px",
  },
}));

export default function FooterPrueba() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div
          className="row text text-center"
          style={{ backgroundColor: "#13455e" }}
        >
          <div
            className="col-5 bg "
            style={{
              color: "white",
              textAlign: "center",
              backgroundColor: "#6B6135",
            }}
          >
            <br></br>
            <br></br>
            <br></br>

            <LocationOnIcon fontSize="large"></LocationOnIcon>
            <h1>Te Esperamos</h1>
            <br></br>
            <h4> ¡ALITAS, HAMBURGUESAS Y MÁS!</h4>
            <h1> ¡Ven con Nosostros! 😃 </h1>
          </div>
          <div
            className="col-7 bg "
            style={{
              color: "black",
              textAlign: "left",
              backgroundColor: "#6B6135",
            }}
          >
            <br></br>
            <MapFooter></MapFooter>
            <br></br>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// <img src="https://html5-editor.net/tinymce/plugins/emoticons/img/smiley-laughing.gif" alt="laughing" width="30" height="30" />