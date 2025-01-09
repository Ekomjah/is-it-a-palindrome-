const btn = document.querySelector("button");
const container = document.querySelector(".container");
const section = document.createElement("section")
const para = document.createElement("p");

function myFunction(reverse){
    let string = '';
    let i;
    for (i = reverse.length - 1 ; i >= 0; i--){
        string += `${reverse[i]}`;
    }
    return string;
}


btn.addEventListener('click' , function(){
section.textContent = "";
const inputValue = document.querySelector('#disciples').value 
const reversal = myFunction(inputValue)

if (inputValue === reversal){
displayMessage(`${inputValue} is a palindrome`)
}
else if(!(inputValue === reversal)) {
displayMessage(`${inputValue} is not a palindrome`)
}
else if (inputValue = ""){
alert("Please type in any word")
}
})

function displayMessage(text){

container.appendChild(section);
section.appendChild(para);
para.textContent = text;
para.classList.add("para")
}