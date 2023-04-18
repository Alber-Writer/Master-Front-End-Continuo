import React from "react";
import classes from "./HolaMundo.scss";
import logoLemon from "./logo-lemoncode.png";

import gifImage from "../content/lemon_gif.gif";
import jpgImage from "../content/lemon_jpg.jpg";
import pngImage from "../content/lemon_png.png";
import svgImage from "../content/lemon_svg.svg";


export const HolaMundo: React.FC = () => {
  console.log(`API BASE: ${process.env.API_BASE}`)
  return (
    <div className={classes.container}>
      <img src={logoLemon} style={{ width: "100px" }} alt="LemonCode Logo" />
      <h1 className={classes.titleA}>Hola Mundo</h1>
      <p>Entorno: <em>{process.env.ENV_NAME}</em></p>
      <p>Api base: <em>{process.env.API_BASE}</em></p>

      <div id="reduced-images">
        <img src={jpgImage} style={{ width: "200px" }} />
      </div>
    </div>
  );
};
