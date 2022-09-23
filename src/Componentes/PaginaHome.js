import Courusel from "../Componentes/courselInicioBootstrap";
import Grid from "@material-ui/core/Grid";
import Container from "@mui/material/Container";

export default function PaginaHome() {
  return (
    <div>
      <Grid item xs={12} sm={10} style={{ marginLeft: 140, marginTop: 70 }}>
        <Courusel></Courusel>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} style={{ justifyContent: "center" }}>
          <img
            className="d-block"
            src="https://i.ibb.co/R3N9sKV/zyro-image-1.jpg"
            alt="First slide"
            style={{ width: "80%", height: "60%", marginLeft: "17%" }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <img
            src="https://i.ibb.co/xzjfgdY/Whats-App-Image-2022-09-22-at-3-32-10-PM.jpg"
            style={{ width: "80%", height: "60%", marginLeft: "3%" }}
          ></img>
          <br />
          <br />
          <Grid item xs={6} sm={12}>
            <h1 className="centrar">Menúss</h1>
          </Grid>
        </Grid>

        <br></br>
      </Grid>
    </div>
  );
}
