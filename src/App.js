import './App.css';
import Quotes from "./components/Quotes.js";
import React, {useState, useEffect} from "react";
import Button from "./components/Button.js";
import Link from "./components/Link.js";

function App() {

  const [quote, setQuote] = useState("");
  const [index, setIndex] = useState(null);
  const [opacity, setOpacity] = useState("0");
  const [disabled, setDisabled] = useState(true);
  const [styleclass, setStyleClass] = useState(["#E74B3C", "#9B59B6", "#342224", "#77B1A9", "#FB6964", "#2C3E50", "#BDBB99", "#472E32", "#73A857", "#F39C12"]);

  const getRandomQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      setQuote(data);
      setOpacity("1");
      setDisabled(false);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const generateIndex = () => {
    return Math.floor(Math.random() * styleclass.length);
  }

  useEffect(() => {
    getRandomQuote();
    setIndex(generateIndex());
  }, []);

  const updateQuote = () => {
    const timeout = setTimeout(() => {
      getRandomQuote();
    }, 375);
    setIndex(generateIndex());
    setOpacity("0");
    setDisabled(true);
  }

  return (
    <div style={{backgroundColor: styleclass[index], color: styleclass[index]}} className="container" >
      <h1 id="header">Random Quotes Generator</h1>
      <div className="quote-box" id="quote-box">
        <Quotes style={{opacity: opacity}} content={quote.content} author={quote.author} />
        <div className="link-container">
        <Link style={{backgroundColor: styleclass[index]}} />
        <Button disabled={disabled} style={{backgroundColor: styleclass[index]}} onclick={updateQuote} text="New Quote" />
        </div>
      </div>
      <footer style={{color: "white", fontSize: "11px", marginTop: "13px"}} id="footer">by Paolo Provveduto</footer>
    </div>
  );
}

export default App;
