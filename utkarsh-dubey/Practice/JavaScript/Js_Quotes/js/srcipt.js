let text = document.getElementById('quote');
let author = document.getElementById('author');
let tweetButton=document.getElementById("tweet");

// console.log(text)
// console.log(author)
// console.log(tweetButton)


const getNewQuote = async () =>{

  let url = "https://type.fit/api/quotes";


  let response = await fetch(url);
 // console.log(response)

  let allQuotes  = await response.json()
//  console.log(allQuotes)

  let indx = Math.floor(Math.random()*allQuotes.length);

  let quote =allQuotes[indx].text;
  let auth = allQuotes[indx].author;

//   console.log(quote)
//   console.log(auth)


  if(auth == null)
  {
    auth = "Anonymous";
  }

//   let text = document.getElementById('quote');
//   let author = document.getElementById('quote');

  text.innerHTML=quote;
  author.innerHTML="~ "+auth;


  let tweetButton=document.getElementById("tweet");
  tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
  
}

getNewQuote()