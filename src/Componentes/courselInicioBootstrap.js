import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from "./imagenesnav/titleData.js";
import Carousel from "react-bootstrap/Carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 100,
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function Courusel() {
  const classes = useStyles();

  return (
    <Carousel fade className="carro">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Npm7gCM/Whats-App-Image-2022-09-22-at-3-32-11-PM.jpg"
          alt="First slide"
          style={{ height: "550px" }}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/0VPqh6m/Whats-App-Image-2022-09-22-at-3-32-10-PM-2.jpg"
          alt="First slide"
          style={{ height: "550px" }}
        />
        <div class="carousel-caption d-none d-md-block">
        <h2 
        style={{
          color: "#060606"
        }}
        
        ><strong>Tenes que probar LA TEGUS BACON CHEESE BURGER       <img src="https://html5-editor.net/tinymce/plugins/emoticons/img/smiley-tongue-out.gif" alt="tongue-out" width="30" height="30"  /></strong></h2>        
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/d0TFW8C/alitas.jpg"
          alt="Third slide"
          style={{ height: "550px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/BCh801W/pasta.jpg"
          alt="Third slide"
          style={{ height: "550px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}
