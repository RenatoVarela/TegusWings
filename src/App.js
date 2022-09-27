import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaHome from "./Componentes/PaginaHome";
import NavBar from "./Componentes/NavBar";
import Auth from "./Auth";
import SignIn from "./Componentes/SingIn";
import Perfil from "./Componentes/perfilAdmin";
import Login from "./Componentes/Login";
import ForgotPass from "./Componentes/ForgotPassword";
import CambioPass from "./Componentes/CambioContraseña";
import FooterPrueba from "./Componentes/footerPrueba";
import CrearProducto from "./Componentes/crearProducto/crearProducto";
import Menu from "./menu/menu";
import DetalleProducto from "./Componentes/detalleProducto";
import EditarProducto from "./Componentes/modificarProducto";
import { useFirebaseApp } from "reactfire";

function App() {
  var bg =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  return (
    <div
      className="content"
      style={{
        height: "100%",
        backgroundImage:
          "url(https://i.ibb.co/2kMYcmH/ink-splash-duotone-stripe-background-1409-1379.jpg)",
      }}
    >
      <NavBar> </NavBar>

      <Switch>
        <Route exact path="/" component={PaginaHome}></Route>
        <Route exact path="/SignIn" component={SignIn}></Route>
        <Route exact path="/Perfil" component={Perfil}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/ForgotPass" component={ForgotPass}></Route>
        <Route exact path="/CambioPass" component={CambioPass}></Route>
        <Route exact path="/CrearProducto" component={CrearProducto}></Route>
        <Route exact path="/Menu" component={Menu}></Route>
        <Route exact path="/DetalleProducto/:slug" component={DetalleProducto}></Route>
        <Route exact path="/EditarProducto/:slug" component={EditarProducto}></Route>
      </Switch>
      <FooterPrueba className="footer"></FooterPrueba>
    </div>
  );
}

export default App;
