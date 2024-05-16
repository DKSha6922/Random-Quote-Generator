const content = document.getElementById("gen");
const author = document.getElementById("author");
const generate = document.getElementById("btn1");
const tweet = document.getElementById("btn2");

const url = 'https://api.quotable.io/random';

const getQuote = async ()=>{
    try{
        const response = await fetch(url);
        const data = await response.json();

        const quote = data.content;
        const auth = data.author || "unknown";

        content.innerHTML =quote;
        author.textContent = auth;
        setTweetButtonHref(quote, auth);
    }catch(err){
        console.log(err);
content.textContent = "Oops! somethoing went wrong."
author.textContent =""; 
    }
}

getQuote();
generate.addEventListener("click",getQuote);

function setTweetButtonHref(quote,auth){
    const tweetText = `${quote} Author :- ${auth}`;
    const tweetHref = `https://twitter.com/intent/tweet?text=${tweetText}`
    tweet.setAttribute("href",tweetHref);
}
