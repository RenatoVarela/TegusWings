import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-config";
import "firebase/firestore";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FullWidthTabs from "../menu/tabs";
import { useHistory } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom: '4%'

  },
  gridList: {
    width:'99%',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  ancho:{
    
  }
});

export default function Categorias() {
  const [servicio, setServicio] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    getCategorias();
  }, []);

  const getCategorias = async () => {
    let obj;
    let list = [];
    const querySnapshot = await db.collection("Productos").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
        list.push(obj);
    });
    setCategorias(list);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={190} className={classes.gridList} cols ={3}>
        {categorias.map((tile,index) => (
          <GridListTile key={tile.imgProducto}>
            <img src={tile.imgProducto} alt={tile.nombreProducto} />
            <GridListTileBar
              title={tile.nombreProducto}
          
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}  onClick={() => history.push({pathname: "/DetalleProducto/"+ tile.id, state: {valor: index}})}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
   
  );
}
