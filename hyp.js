let angle1=document.querySelector("#angle1")
let angle2=document.querySelector("#angle2")
let buttonEl=document.querySelector("#check")
let outputEl=document.querySelector("#output")


function sumOfSquares(a,b){
    return (a*a)+(b*b)
}

function calculateHypotenuse(){
    let sum= sumOfSquares(angle1.value, angle2.value)
    let hyp= Math.sqrt(sum)
    return outputEl.innerText="Their Hypotenuse is: "+hyp;
}

buttonEl.addEventListener("click", calculateHypotenuse)