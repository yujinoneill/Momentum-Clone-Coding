const quotes = [
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "All you need in this life is ignorance and confidence; then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: "Tis better to have loved and lost, than never to have loved at all.",
        author: "Alfred Lord Tennyson",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "To love is to receive a glimpse of heaven.",
        author: "Karen Sunde",
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso",
    },
    {
        quote: "Sometimes even to live is an act of courage.",
        author: "Lucius Annaeus Seneca",
    },
    {
        quote: "Live your life as though your every act were to become a universal law.",
        author: "Immanuel kant",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[randomNum].quote;
author.innerText = quotes[randomNum].author;