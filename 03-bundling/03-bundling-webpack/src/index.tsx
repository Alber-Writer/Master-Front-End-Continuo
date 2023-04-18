import React from "react";
import { createRoot } from "react-dom/client";
import { HolaMundo } from "./componentDemo/HolaMundo";
import "./styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    < HolaMundo />
  </div>
);