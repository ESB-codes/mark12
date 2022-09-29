let sides=document.querySelectorAll(".triangle")
let buttonEl=document.querySelector("#check")
let outputEl=document.querySelector("#output")


function calculation(a,b){
    return a*b/2
}

function calculateArea(){
    let area= calculation(sides[0].value, sides[1].value)
    if (sides[0].value && sides[1].value){
        if (sides[0].value<=0 || sides[1].value<=0  )
        outputEl.innerHTML="please provide positive values"

        else{
             outputEl.innerText="The area of this triangle is: "+area+" cm square"

        }

    }
    else{
        outputEl.innerText="Pls provide both the values"

    }
}

buttonEl.addEventListener("click", calculateArea)