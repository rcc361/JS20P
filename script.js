const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuote = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
function newQuote(){
    loading();

    const quote = apiQuote;
    
    // Check unknown Author
    if (!quote.author) {
        authorText.textContent ='Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Check length for styling
    if (quote.quote.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.quote;
    complete();

}
// Get Quote from API
const getQuote = async () => {
    loading();

    const apiURL = 'https://dummyjson.com/quotes/random';
    try {
        const response = await fetch(apiURL);
        console.log(response)
        apiQuote = await response.json();
        newQuote();
        } catch (error) {
        console.log("Error pulling quote");
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);

// On Load
getQuote();