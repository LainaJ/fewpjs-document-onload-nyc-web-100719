// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    giveText()
})

//find the p tag 
//change it to the text below
function giveText() {
   let para = document.getElementById("text")
   para.innerHTML = "This is really cool!"
}