let angle1=document.querySelector("#angle1")
let angle2=document.querySelector("#angle2")
let buttonEl=document.querySelector("#check")
let outputEl=document.querySelector("#output")


function sumOfSquares(a,b){
    return (a*a)+(b*b)
}

function calculateHypotenuse(){
    let sum= sumOfSquares(angle1.value, angle2.value)
    if (angle1.value && angle2.value){
        if (angle1.value<0 || angle2.value<0){
            outputEl.innerText="please provide positive the values"
        }
        else{
            let hyp= Math.sqrt(sum)
            return outputEl.innerText="Their Hypotenuse is: "+hyp.toFixed(2);        }

    }
    else{
        outputEl.innerText="please provide both the values"
    }
    
}

buttonEl.addEventListener("click", calculateHypotenuse)