/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator - Exceeds expectation grade
******************************************/

/*** 
 * An array of famous quotes 
***/
const quotes = [
   {
    quote: 'Spread love everywhere you go. Let no one ever come to you leaving happier.',
    source: 'Mother Teressa'
   },
   {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney'
   },
   {
    quote: `Your time is limited, so don't waste it living someone else's life. Dont be 
    trapped by dogma - which is living with the results of other people's thinking.`,
    source: 'Steve Jobs'
   },
   {
    quote: 'Spread love everywhere you go. Let no one ever come to you leaving happier.',
    source: 'Mother Teressa'
   },
   {
    quote: 'If life were predictable it would cease to be life, and be without flavour.',
    source: 'Eleanor Roosevelt'
   },
   {
    quote:`If you look at what you have in life, you'll always have more. if you look
    what you don't have in life, you'll never have enough.`,
    source: 'Oprah Winfrey'
   },
   {
    quote: `if you set your goals ridiculously high and it's a failure, you will fail 
    above everyone else's success.`,
    source: 'James Cameron'
   },
   {
    quote: `Life is what happens when you're busy making other plans`,
    source: 'John Lennon'
   },
   {
    quote: `The best and most beautiful things in the world cannot be seen or even
    touched - they must be felt with the heart.`,
    source: 'Helen Keller'
   },
   {
    quote: `It's during our darkest moments that we must focus to see the light.`,
    source: 'Aristotle'
   },
   {
    quote: `Do not go where the path may lead, go instead where there is no path and 
    leave a trail.`,
    source: 'Ralph Waldo Emerson'
   },
   {
    quote: `The future belongs to those who believe in the beauty of their dreams.`,
    source: 'Eleanor Roosevelt'
   },
   {
    quote: `The greatest glory in living lies not in never falling, but in rising 
    every time we fall.`,
    source: 'Nelson Mandela'
   },
   {
    quote: 'You wll face many defeats in life, but never let yourself be defeated.',
    source: 'Maya Angelou'
   },
   {
    quote: `I learned that courage was not the absence of fear, but the triumph over it.
     The brave man is not he who does not feel afraid, but he who conquers that fear`,
    source: 'Nelson Mandela',
    citation: 'Book',
    year: 2012,
    subject: 'Spiritual alchemy'
   },
   {
    quote: `You may shoot me with your words, you may cut me with your eyes, you may kill me 
    with your hatefulness, but still, like air, I'll rise!`,
    source: 'Maya Angelou',
    citation: 'Book',
    year: 1994,
    subject: 'Poetry'
   }

];


/***
 * Return random object 
***/
function getRandomQuote()  {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let arrayObject = quotes[randomNumber];
  return arrayObject;
}


/***
 * Display the object values and refresh background color
***/
let currentQuote;
let quotesObject;

function printQuote() {
  do  {                                                                                                         //re-run randomQuote if quote repeats
    quotesObject = getRandomQuote();
  } while (currentQuote === quotesObject.quote);
  
  currentQuote = quotesObject.quote;
  
  let htmlString = `<p class="quote">${quotesObject.quote}</p> <p class="source">${quotesObject.source}`;
  
  if (Object.keys(quotesObject).includes('citation')) {
    htmlString +=  `<span class="citation"> ${quotesObject.citation}</span>`;
  }
  if (Object.keys(quotesObject).includes('year')) {
    htmlString +=  `<span class="year"> ${quotesObject.year}</span>`;
  }
  if (Object.keys(quotesObject).includes('year')) {                                                        //extra Object added to webpage
    htmlString +=  `<span class="year">${quotesObject.subject}</span>`;
  }

  htmlString += '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
  document.querySelector('body').style.backgroundColor = `hsl(${randomHue()}, 50%, 50%)`;
}


/***
 * Generate random number/hue and call printQuote function
***/
const randomHue = () => Math.floor(Math.random() * 361);

function refreshPage() {
  printQuote();
}

/***
 * Reset interval/timer
***/
function resetInterval()  {
  clearInterval(refresh);
  setTimeout(restartInterval);
}

function restartInterval()  {
  refresh = setInterval(refreshPage, 8000);
}

/***
 * Execute printQuote function 
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);


/***
 * Execute resetInterval function
***/
document.getElementById('load-quote').addEventListener("click", resetInterval, false);


/***
 * Function call - automatic quote and background color refresh at 8 second intervals
***/
let refresh = setInterval(refreshPage, 8000);