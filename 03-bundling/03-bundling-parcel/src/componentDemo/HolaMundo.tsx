import React from "react";
import "./HolaMundo.scss";
//import classes from "./HolaMundo.scss"; con classes peta
import logoLemon from "./logo-lemoncode.png";

import jpgImage from "../content/lemon_jpg.jpg";


export const HolaMundo: React.FC = () => {
  console.log(`API BASE: ${process.env.API_BASE}`)
  return (
    <div className="container">
      <img src={logoLemon} style={{ width: "100px" }} alt="LemonCode Logo" />
      <h1 className="title">Hola Mundo</h1>
{/*       <p>Entorno: <em>{process.env.ENV_NAME}</em></p>
      <p>Api base: <em>{process.env.API_BASE}</em></p> */}

      <div id="reduced-images">
        <img src={jpgImage} style={{ width: "200px" }} />
      </div>
    </div>
  );
};
