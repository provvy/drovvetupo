import React from "react";

const Button = (props) => {
  return (
    <button style={props.style} className="button" id="new-quote" onClick={props.onclick}>{props.text}</button>
  );
}

export default Button;
