import React from "react";

const Quotes = (props) => {
  return (
    <div className="text">
      <span id="text"><i className="fas fa-quote-left"></i>{props.content}</span>
      <p id="author">- {props.author}</p>
    </div>
  )
}

export default Quotes;
