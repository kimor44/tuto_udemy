import React from "react";
import classes from "./TitleH1.module.css"

export default function TitleH1(props) {
  const titleStyle = `${classes.policeTitle} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`
  return (
    <h1 className={titleStyle}>
      {props.children}
    </h1>
  );
}
