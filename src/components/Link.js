import React from "react";

const Link = (props) => {
  return (
    <a style={props.style} className="link" id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a>
  );
}

export default Link;
