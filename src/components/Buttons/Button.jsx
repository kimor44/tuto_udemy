import React from "react";

const Button = (props) => {
 const buttonStyle = `btn btn-${props.result} ${props.css}`
  return <button className={buttonStyle} onClick={props.clic}>{props.children}</button>;
};

export default Button;
