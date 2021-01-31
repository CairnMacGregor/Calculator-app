const output = document.getElementById("output")
const caclulator = document.querySelector(".calculator");
const answer = document.getElementById("answer")
const keys = caclulator.querySelector(".pinpad");

let nums = []
answer.innerHTML=""

keys.addEventListener("click", (e) => {
    if (e.target.matches("button.number")) {
      output.innerHTML += e.target.textContent;
    } 
    else if( e.target.matches("button.operator")){
        if(output.innerText.length === 0){}else{
        output.innerHTML += " " + e.target.textContent + " ";
    }}
    else if (e.target.matches(".clear")) {
      output.innerHTML = "";
      answer.innerHTML = "";
    }
    else if (e.target.matches("#back")) {
        let str = output.innerHTML
        newstr = str.slice(0, -1);
        output.innerHTML = newstr
      }
    if(e.target.matches('#enter')){
        if(output.innerText.length === 0){    
        } else {
        doCalc()}
    }
  });




const doCalc = () => {
let sum = output.innerText

let answer = (eval(sum))
    document.getElementById("answer").innerText = answer
    output.innerHTML = answer;
   
}