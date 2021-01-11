import React from "react";

const Button = (props) => {
  return (
    <button disabled={props.disabled} style={props.style} className="button" id="new-quote" onClick={props.onclick}>{props.text}</button>
  );
}

export default Button;
