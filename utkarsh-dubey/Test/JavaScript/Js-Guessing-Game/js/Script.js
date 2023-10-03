// let RamdomNumber;
// let points = 0;
// let chances = 5;
// let playButton = document.getElementById('playGame')
// let gameForm = document.getElementById('game-frm')


// function GenerateRandomNum(){
//     let chancesRemain = document.getElementById('Chances');
//     let UserPoints = document.getElementById('score');
       
       
//    RamdomNumber = Math.floor(Math.random() * 10) + 1;
//    console.log(RamdomNumber)

   
// }

// function StartNewGame(){

//   RamdomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(RamdomNumber);

//   document.getElementById('Chances').innerHTML = 5;
//   document.getElementById('score').innerHTML = 0;
  
//   alert("New Game Started!!")
// }

// playButton.addEventListener('click', () => {
//   // debugger
//   let points = 0;
//   let chances = 5;

//   let userGuessNumber = document.getElementById('playerNum').value;
//   let chancesRemain = document.getElementById('Chances');
//   let UserPoints = document.getElementById('score');

//   console.log(RamdomNumber);
//   console.log(userGuessNumber)

//   return new Promise((resolve, reject) => {
       
//       if(parseInt(userGuessNumber) !== RamdomNumber){
//         reject(

//           alert("You Guessed Wrong"),
//           chancesRemain.textContent = " ",
//           chancesRemain.textContent = chances,
//         )
//       }
//       else if(RamdomNumber === parseInt(userGuessNumber)){
//          points += 10;
//          chances -=1;

//          resolve(
          
//           alert("You Guessed Right"),
//             chancesRemain.textContent = " ",
//             chancesRemain.textContent = chances,

//             UserPoints.textContent = " ",
//             UserPoints.textContent = points
//          )
//       }
//       else if(userGuessNumber>10){
//         reject(alert("Number Should Be Less Than 10"))
//     }

//   })
  
// })

let RamdomNumber;
let points = 0;
let chances = 5;
let playButton = document.getElementById('playGame')
let gameForm = document.getElementById('game-frm')


function GenerateRandomNum() {
  let chancesRemain = document.getElementById('Chances');
  let UserPoints = document.getElementById('score');

  RamdomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(RamdomNumber)
function GenerateRandomNum(){
    let chancesRemain = document.getElementById('Chances');
    let UserPoints = document.getElementById('score');
       
       
   RamdomNumber = Math.floor(Math.random() * 10) + 1;
   console.log(RamdomNumber)

   
}

function StartNewGame(){

  RamdomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(RamdomNumber);

  document.getElementById('Chances').innerHTML = 5;
  document.getElementById('score').innerHTML = 0;
  
  alert("New Game Started!!")
}

function StartNewGame() {

  RamdomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(RamdomNumber);

  document.getElementById('Chances').innerHTML = 5;
  document.getElementById('score').innerHTML = 0;

  alert("New Game Started!!")
}

playButton.addEventListener('click', async () => {
  let points = 0;
  let chances = 5;
  let chancesRemain = document.getElementById('Chances');
  let UserPoints = document.getElementById('score');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  while (chances > 0) {
    let userGuessNumber = parseInt(prompt("Guess a number between 1 and 10"));
    console.log(RamdomNumber);
    console.log(userGuessNumber);

    if (userGuessNumber < 1 || userGuessNumber > 10 || isNaN(userGuessNumber)) {
      alert("Please enter a valid number between 1 and 10.");
    } else {
      if (userGuessNumber === RamdomNumber) {
        points += 10;
        chances--;
        alert("You Guessed Right");

        chancesRemain.textContent = chances;
        UserPoints.textContent = points;
        break;
      } else {
        chances--;
        alert("You Guessed Wrong");

        chancesRemain.textContent = chances;
      }
    }

    await sleep(100);
  }

  alert("Game Over! Your score is " + points);
});




// playButton.addEventListener('click', () => {
  
//     // debugger
//   let points = 0;
//   let chances = 5;

//   let userGuessNumber = document.getElementById('playerNum').value;
//   let chancesRemain = document.getElementById('Chances');
//   let UserPoints = document.getElementById('score');

//   console.log(RamdomNumber);
//   console.log(userGuessNumber);

// function loop(){
//   for(let i=chances; i>0;){
//     if (parseInt(userGuessNumber) !== RamdomNumber) {
//       alert("You Guessed Wrong");
//       i--;
//       chances= i;;
//       chancesRemain.textContent = chances;
//       console.log("chances:", chances);
//       console.log(i);
//       break;
//     }
//   }
//     if (RamdomNumber === parseInt(userGuessNumber)) {
//       points += 10;
//       chances -= 1;
//       alert("You Guessed Right");
      
//       chancesRemain.textContent = chances;
//       UserPoints.textContent = points;
      

//     }
//     if (userGuessNumber > 10) {
//       alert("Number Should Be Less Than 10");
//     }
  
//   gameForm.reset();
//   loop();
// }
//  loop()

// })


playButton.addEventListener('click', () => {
  // debugger
  let points = 0;
  let chances = 5;

  let userGuessNumber = document.getElementById('playerNum').value;
  let chancesRemain = document.getElementById('Chances');
  let UserPoints = document.getElementById('score');

  console.log(RamdomNumber);
  console.log(userGuessNumber)

  return new Promise((resolve, reject) => {
       
      if(parseInt(userGuessNumber) !== RamdomNumber){
        reject(

          alert("You Guessed Wrong"),
          chancesRemain.textContent = " ",
          chancesRemain.textContent = chances,
        )
      }
      else if(RamdomNumber === parseInt(userGuessNumber)){
         points += 10;
         chances -=1;

         resolve(
          
          alert("You Guessed Right"),
            chancesRemain.textContent = " ",
            chancesRemain.textContent = chances,

            UserPoints.textContent = " ",
            UserPoints.textContent = points
         )
      }
      else if(userGuessNumber>10){
        reject(alert("Number Should Be Less Than 10"))
    }

  })
  
})

