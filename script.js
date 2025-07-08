const btn = document.querySelector("button");
const container = document.querySelector(".container");
const section = document.createElement("section")
const para = document.querySelector("#result");

btn.addEventListener('click' , function(){
section.textContent = "";
const inputVal = document.querySelector('#text-input').value 
const inputValue = inputVal.toLowerCase().replace(/[@#:$().,%&*!?;_\- ]/gi, "");
const reversal = myFunction(inputValue);

if(inputValue === ""){
    alert("Please input a value")
}

else if (inputValue === reversal){
displayMessage(`${inputVal} is a palindrome`)
}
else if(!(inputValue === reversal)) {
displayMessage(`${inputVal} is not a palindrome`)
}
else if (inputValue = ""){
alert("Please type in any word")
}
});


function myFunction(reverse){
    let string = '';
    let i;
    for (i = reverse.length - 1 ; i >= 0; i--){
        string += `${reverse[i]}`;
    }
    let newString = string.replace(/[@#$%&*!:().,?;_\- ]/gi, "")
    console.log(newString)
    return newString;
}



function displayMessage(text){
para.textContent = text;
para.classList.add("para")
}