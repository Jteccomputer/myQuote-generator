const quotes = [
    "God has not forgotten you.", 
    "Push yourself, because nobody will do it for you",
    "Before you share your secrets, make sure that your listener is not a speaker, and definitely not a script writter.",
    "Failure comes from drifting, success from persistent climbing.With persistence you will win.",
    "Nothing is permanent. Don't stress your stress yourself too much because no matter how bad the situation is.",
    "A great man is hard on himself, a small man is hard on others.- Lao Tzu",
    "Anger is the feeling that makes your mouth work faster than your mind.",
    "Great things take time. Be patient. Never give up.",
    "Disconnect from the people who are holding you back.",
    "Work hard in silence, let your success be your noise.",
    "Give yourself permission to fail. If you never fail, you never learn.",
    "Never underestimate yourself, you can do it.",
    "The greatest wealth is to live content with little.- Plato",
    "Kindness is not an act, it's a reflection of your soul.",
    "When one is truly ready for a thing, it puts in its appearance.",
    "Time is more valuable than money. You can get more money, but you cannot get more time.",

];

function tweetQuote(quote)  {
    const quoteWrapper = document.getElementById("quoteWrapper");
    let numb_of_quotes = quotes.length;

    let randNumb = Math.floor(Math.random() * numb_of_quotes);

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    let rgb = `rgb(${red}, ${green}, ${blue})`;

    quotes.map((val, index, array) => {
        if(index === randNumb) {
            quoteWrapper.innerHTML = val;
        }
    });
}

setInterval(() => {
    tweetQuote(quotes);
}, 2000);