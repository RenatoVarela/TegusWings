import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import BotonEliminarServicio from "./botonEliminarProducto";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  root1: {
    maxWidth: 345,
    // minHeight: '25vw'
  },
  container: {
    margin: "2% 4%",
  },
  media: {
    height: 300,
  },

  fixedH: {
    height: "6vw",
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const firebase = useFirebaseApp();
  const admin = firebase.auth().currentUser;
  let history = useHistory();

  const [flag, setflag] = useState(false);
  const getDatos2 = async () => {
    if (admin !== null) {
      setflag(true);
    } else {
      setflag(false);
    }
  };
  useEffect(() => {
    getDatos2();
  }, []);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="default">
        <Tabs
          value={props.value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.categoria.map((categoriass, index) => {
            return (
              <Tab
                key={index}
                label={categoriass.Nombre}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </AppBar> */}

      <Grid container spacing={3}>
        {props.servicios.map((servicioo, index) => {
          return (
            <Grid item xs={12} sm={4}>
              <Card key={`cards-${index}`} className={classes.root1}>
                <CardActionArea
                  onClick={() =>
                    history.push("/DetalleProducto/" + servicioo.id)
                  }
                >
                  <CardMedia
                    className={classes.media}
                    image={servicioo.imgProducto}
                    title={servicioo.descripcion}
                  />
                  <CardContent className={classes.fixedH}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {servicioo.nombreProducto}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" style={{ textAlign: "right", color:"red" }}>
                      {"LPS. " +servicioo.precio+".00"}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions className={classes.bottom}>
                  {flag && (
                    <Button size="small" color="primary">
                      <Link to={"/EditarProducto/" + servicioo.id}>Editar</Link>
                    </Button>
                  )}
                  {flag && (
                    <BotonEliminarServicio
                      id={servicioo.id}
                      funcEliminar={props.eliminar}
                      changedata={props.setService}
                      data={props.servicios}
                    ></BotonEliminarServicio>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
