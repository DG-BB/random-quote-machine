import {Component} from "react";
import "./App.css";

const quotes = [
    {
        author: "Albert Einstein",
        text: "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt."
    },
    {
        author: "Walt Disney",
        text: "Alle Träume können wahr werden, wenn wir den Mut haben, ihnen zu folgen."
    },
    {
        author: "Hermann Hesse",
        text: "Man muss das Unmögliche versuchen, um das Mögliche zu erreichen."
    },
    {
        author: "Karl Paul Reinhold Niebuhr",
        text: "Gott gebe mir die Gelassenheit, Dinge hinzunehmen, die ich nicht ändern kann, den Mut, Dinge zu ändern, die ich ändern kann, und die Weisheit, das eine vom anderen zu unterscheiden."
    },
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {quotes, currentQuote: quotes[0]};
    }

    _quoteAsOneText(quote) {
        return quote.text + " -" + quote.author;
    }

    _getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    _displayRandomQuote = () => {
        this.setState({currentQuote: quotes[this._getRandom(quotes.length)]});
    }

    render() {
        const {currentQuote} = this.state;

        return (
            <div className="quote-container">
                <div id="quote-box">
                    <div className="button-container">
                        <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=" + this._quoteAsOneText}>Auf Twtter teilen</a>
                        <button id="new-quote" onClick={() => this._displayRandomQuote()}>Weiter »</button>
                    </div>
                    <hr/>
                    <div className="text-container">
                        <div id="text">
                            <span style={{fontWeight: "bold"}}>» </span>
                            {currentQuote.text}
                            <span style={{fontWeight: "bold"}}> «</span>
                        </div>
                        <div id="author">~{currentQuote.author}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

