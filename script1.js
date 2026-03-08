/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"))

if(target){
e.preventDefault()

target.scrollIntoView({
behavior:"smooth"
})
}

})

})



/* Newsletter subscription */

const subscribeBtn = document.querySelector(".newsletter button")

if(subscribeBtn){

subscribeBtn.addEventListener("click", function(){

const email = document.querySelector(".newsletter input").value

if(email === ""){
alert("Please enter your email")
}else{
alert("Thanks for subscribing!")
}

})

}



/* Dynamic footer year */

const year = new Date().getFullYear()

const footerText = document.querySelector(".footer-bottom p")

if(footerText){
footerText.innerHTML = "© " + year + " Zahid Khan"
}