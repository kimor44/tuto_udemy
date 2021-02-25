import React from "react";

const Alert = (props) => {
 const myCSSClasses = `alert ${props.typeAlert}`
  return (
    <div class={myCSSClasses} role="alert">
      {props.children}
    </div>
  );
};

export default Alert;
