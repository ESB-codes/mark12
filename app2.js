let inputEl=document.querySelectorAll(".angles"); // it stores all angles in an array
let buttonEl=document.querySelector("#check2");
let outputEl=document.querySelector("#output")


function calculateSumOfAngles(a,b,c){
    return a+b+c;

}

function isTriangle(){
    let sum=calculateSumOfAngles(Number(inputEl[0].value),Number(inputEl[1].value),Number(inputEl[2].value));
    if(sum===180){
         outputEl.innerText="yep, triangle"
     }else{
        outputEl.innerText="nope, not a triangle"
    }
}

buttonEl.addEventListener("click", isTriangle)