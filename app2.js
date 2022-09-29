let inputEl=document.querySelectorAll(".angles"); // it stores all angles in an array
let buttonEl=document.querySelector("#check2");
let outputEl=document.querySelector("#output")


function calculateSumOfAngles(a,b,c){
    return a+b+c;

}

function isTriangle(){
    let sum=calculateSumOfAngles(Number(inputEl[0].value),Number(inputEl[1].value),Number(inputEl[2].value));

    if(Number(inputEl[0].value),Number(inputEl[1].value),Number(inputEl[2].value)){
        if(Number(inputEl[0].value<0) || Number(inputEl[1].value<0) || Number(inputEl[2].value<0)){
            outputEl.innerText="provide positive values"
    
        }
        else{
            if(sum===180){
                outputEl.innerText="yep, triangle"
            }else{
               outputEl.innerText="nope, not a triangle"
           }
    
    
        }

    }else{
        outputEl.innerText="please provide all the values"

    }

     
    
}

buttonEl.addEventListener("click", isTriangle)