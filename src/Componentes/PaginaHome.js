import Courusel from "../Componentes/courselInicioBootstrap";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";
import ProductoGrid from "../Componentes/ProductoGrid";

export default function PaginaHome() {
  return (

<div>
<br></br>
<Grid container spacing={3}>
<br></br>
      <Grid item xs={12} sm={6}>
      <img src="https://i.ibb.co/Npm7gCM/Whats-App-Image-2022-09-22-at-3-32-11-PM.jpg"
       style={{width:"90%", height:"92%", marginLeft:"7%"}}></img>
       </Grid>
       <Grid item xs={12} sm={6}>
      <Courusel></Courusel>
      </Grid>
      <br></br>
      <Grid item xs={12} sm={12}>
      <img
      className="d-block w-100"
      src="https://i.ibb.co/Fnwsz0v/Presentaci-n2-3.jpg"
      alt="First slide"
      style={{height:"80px"}}
    />
    </Grid>
    <Grid item xs={12} sm={12}>
      <h1 style={{ textAlign: "center" }}>Menús</h1>
     
      <ProductoGrid></ProductoGrid>
    </Grid>
      <br></br>
    </Grid>
    
    </div>

    /* <div>
      <Grid item xs={12} sm={10} style={{ marginLeft: 140, marginTop: 70 }}>
        <Courusel></Courusel>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={3}>

      <Grid item xs={12} sm={12}>
      <img
      className="d-block w-100"
      src="https://i.ibb.co/Fnwsz0v/Presentaci-n2-3.jpg"
      alt="First slide"
      style={{height:"80px"}}
    />
    </Grid>
        <div>
          <Grid item xs={6} sm={10} style={{ marginLeft: "9%" }}>
            <h1 style={{ textAlign: "center" }}>Menús</h1>

            <ProductoGrid></ProductoGrid>
          </Grid>
        </div>

        <br></br>
      </Grid>
    </div> */
  );
}