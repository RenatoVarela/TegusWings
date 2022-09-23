import  Courusel from "../Componentes/courselInicioBootstrap"
import Grid from "@material-ui/core/Grid";


export default function PaginaHome() {
  return (
<div>
<Grid container spacing={3}>
      <Grid item xs={12} sm={12}>

        
  <img
      className="d-block w-100"
      src="https://i.ibb.co/R3N9sKV/zyro-image-1.jpg"
      alt="First slide"
      style={{width:"100%", height:"95%"}}
    />
    </Grid>

      <Grid item xs={12} sm={6}>
      <img src="https://i.ibb.co/xzjfgdY/Whats-App-Image-2022-09-22-at-3-32-10-PM.jpg"
       style={{width:"95%", marginLeft:"3%"}}></img>
       </Grid>
       <Grid item xs={12} sm={6}>
      <Courusel></Courusel>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs={12} sm={12}>
      <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/clinicadental-dd61e.appspot.com/o/Screenshot%20(11).png?alt=media&token=99e995ac-68e3-47e7-9cea-de252b563f2a"
      alt="First slide"
      style={{height:"243px"}}
    />
    </Grid>
    <Grid item xs={12} sm={12}>
      <h1 className="centrar">Menúss</h1>
     
      
    </Grid>
      <br></br>
    </Grid>
    
    </div>
  );
}
