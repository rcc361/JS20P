let apiQuotes = [];

console.log("Start");

// Get Quotes from API
async function getQuotes() {
    const apiURL = 'https://dummyjson.com/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        } catch (error) {
        console.log("Error pulling quote");
    }
}



// On Load
getQuotes();