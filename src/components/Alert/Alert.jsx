import React from "react";

const Alert = (props) => {
  const myCSSClasses = `alert ${props.typeAlert}`;
  return (
    <div class={myCSSClasses} role="alert">
      {props.children}
      <button type="button" class="close" aria-label="Close" onClick={props.closeAlert}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
