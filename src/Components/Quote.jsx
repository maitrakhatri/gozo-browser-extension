import { useEffect, useState } from "react";
import quotesDB from "../Database/quotes.json";

export function Quote() {
  const allQuotes = quotesDB.quotes;

  function getRandomQuote() {
    return allQuotes[Math.floor(Math.random() * allQuotes.length)];
  }

  const [quote, setQuote] = useState(getRandomQuote());

  return (
    <div className="quote">
      <q>{quote.quote}</q> ~ {quote.author}
    </div>
  );
}
