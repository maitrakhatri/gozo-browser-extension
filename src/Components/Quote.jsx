import quotesDB from "../Database/quotes.json"

export function Quote() {

    const allQuotes = quotesDB.quotes;

    function getRandomQuote(allQuotes) {
        return allQuotes[Math.floor(Math.random()*allQuotes.length)]
    }

    const getQuote = getRandomQuote(allQuotes);
    const displayQuote = getQuote.quote;
    const author = getQuote.author;

    return <div className="quote">
        <q>{displayQuote}</q> ~ {author}
    </div>;
}