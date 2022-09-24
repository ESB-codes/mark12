let sides=document.querySelectorAll(".triangle")
let buttonEl=document.querySelector("#check")
let outputEl=document.querySelector("#output")


function calculation(a,b){
    return a*b/2
}

function calculateArea(){
    let area= calculation(sides[0].value, sides[1].value)
    return outputEl.innerText="The area of this triangle is: "+area+" cm square"
}

buttonEl.addEventListener("click", calculateArea)