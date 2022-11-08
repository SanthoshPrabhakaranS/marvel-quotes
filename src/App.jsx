import { useEffect } from "react";
import { useState } from "react";
import Logo from "./components/Logo";
import "./styles/App.scss";

function App() {
  const [quote, setQuote] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "93ecb60740msh78006a5219c5cd0p1874fbjsnd9b948a3e637",
      "X-RapidAPI-Host": "marvel-quote-api.p.rapidapi.com",
    },
  };

  const fetchQuote = () => {
    fetch("https://marvel-quote-api.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchQuote()
  },[])

  return (
    <div className="app">
      <div className="title-div">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2012-2014.png"
          alt="logo"
        />
        <h1>Quotes</h1>
      </div>
      <div className="quote-div">
        <div className="quote">
          <p className="word">{quote.Quote}</p>
          <div className="details">
            <p>Speaker: {quote.Speaker}</p>
            <p>Movie: {quote.Title}</p>
          </div>
        </div>
        <div className="btn-div">
          <button className="btn" onClick={() => fetchQuote()}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
