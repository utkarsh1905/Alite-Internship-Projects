const arrows = document.querySelectorAll(".arrow")
// console.log(arrows)
const movieLists = document.querySelectorAll(".movie-list")
// console.log(movieLists)

arrows.forEach((arrow,i) => {
 const itemNumber = movieLists[i].querySelectorAll("img").length
 let clickCounter = 0;
 // console.log(i)
 arrow.addEventListener("click",()=>{
    const ratio = Math.floor(window.innerWidth/270)
    // console.log("You Clicked To:"+i)
    // console.log(movieLists[i])
    clickCounter++;
    if(itemNumber - (4+clickCounter) + (4 - ratio) >= 0){
        movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value
        -300}px)`
    }else{
        movieLists[i].style.transform = "translateX(0)"
        clickCounter = 0
    }
 })
// console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value)
// console.log(movieLists[i].querySelectorAll("img").length)
// console.log(Math.floor(window.innerWidth/270))
})


const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.movie-list-title,.navBar-container,.sideBar,.sidbar-left-icon,.toggle")

ball.addEventListener("click",()=>{
    items.forEach(item =>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})