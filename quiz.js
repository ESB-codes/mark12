let formsEl=document.querySelector("#forms")
let buttonEl=document.querySelector("#check")
let outputEl=document.querySelector("#output")

// array of correct answers
const correct=['90°', 'right angled', '45°', '12, 16, 20']


// this function will check whether user provided correct answer
// it will also display score

function calculateScore(){
    let sum=0;
    // we need index to iterate though the array of correct answers
    let index=0;

    // calling the form API
    let forms= new FormData(formsEl)

    // for of loop
    for (let x of forms.values()){
        if (correct[index]===x){
            console.log("correct")
            sum++;

        }else{
            console.log("wrong")
        }
        index++;

    }
    return outputEl.innerText="the final score is: "+sum;
}


buttonEl.addEventListener("click", calculateScore)