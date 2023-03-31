import React from "react";
import {getAvg} from "./averageService";
import classes from "./averageComponentStyles.scss";
import img001 from "./content/logo_1.png"

export const AverageComponent: React.FC = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div>
      <img src={img001} style={{width:"100px"}} alt="aaa" />
      <h1 className={classes.title}>Título</h1>
      <span className={classes.resultBackground}>Students average: {average}</span>
    </div>
  );
};

const aaaa: number = 2;