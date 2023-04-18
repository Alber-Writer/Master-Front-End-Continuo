import "./styles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { HolaMundo } from "./componentDemo/HolaMundo";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="base">
    <HolaMundo />
  </div>
)
