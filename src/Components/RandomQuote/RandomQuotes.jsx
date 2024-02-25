import React from 'react';
import { useState, useEffect } from 'react';
import './RandomQuotes.css';
import X_logo from '../Assets/X_logo.png';
import { randomColors } from './RandomColors';

const quoteApi = "https://type.fit/api/quotes";
const RandomQuotes = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch(quoteApi)
      .then((response) => { return response.json() })
      .then((data) => {
        const random = data[Math.floor(Math.random() * data.length)];
        setQuote({
          text: random.text,
          author: random.author,
        });
      })
      .catch((error) => {console.log("Error while fetching: ", error)});
  };

  document.documentElement.style.setProperty('--random-color', randomColors());

  const handleButtonClick = () => {
    fetchQuote();
  };

  const authorName = quote.author ? (quote.author === "type.fit" ? "Unknown" : quote.author.split(',')[0]) : '';

  return (
    <div id="container">
      <p className="text"><q>{quote.text}</q></p>
      <p className="name">- {authorName}</p>
      <div className="row">
      <a href={`https://twitter.com/intent/post?hashtags=quotes&text="${quote.text}" -${authorName}`} target="_blank" rel="noopener noreferrer">
      <img src={X_logo} alt="X logo" />
      </a>
      <button onClick={handleButtonClick}>New Quote</button>
      </div>
    </div>
  )
}

export default RandomQuotes
