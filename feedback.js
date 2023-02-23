const ratingsEls = document.querySelectorAll(".rating")
const btnEl = document.getElementById('btn')
const containerEl = document.getElementById("container")
let selectedRating = " "


 ratingsEls.forEach((ratingsEl)=>{
    ratingsEl.addEventListener("click",(event)=> {
        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
 })

 btnEl.addEventListener("click", function(){
   if(selectedRating != " "){
    containerEl.innerHTML = ` <strong>Thank you!</strong>
    <br>
    <br>
    <strong>FeedBack: ${selectedRating}!</strong>
    <p>We'll use your feedback to improve our customer support
    ` 
   }
 })

 function removeActive(){
    ratingsEls.forEach((ratingsEl)=>{
        ratingsEl.classList.remove("active")
    })
 }