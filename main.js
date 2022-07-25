const quoteText = document.querySelector('.quotes');
const author    = document.querySelector('.author');
const btn       = document.querySelector('.btn');

btn.addEventListener('click', function() {
    quoteText.innerHTML = '';
    author.innerHTML    = '';
    generateQuote()
});

const generateQuote = () => {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(quotes => {
            var quotesArray  = Object.keys(quotes);
            var quotesIndex  = Math.floor(Math.random() * quotesArray.length);
            var randomKey    = quotesArray[quotesIndex];
            var randomValue  = quotes[randomKey];
            quoteText.innerHTML = randomValue.text;
            author.innerHTML = `━  ${randomValue.author}`;
        });
}

generateQuote();