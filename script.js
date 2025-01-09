const btn = document.querySelector("button");
const container = document.querySelector(".container");
const section = document.createElement("section")
const para = document.createElement("p");

btn.addEventListener('click' , function(){
section.textContent = "";
const inputVal = document.querySelector('#disciples').value 
const inputValue = inputVal.toLowerCase();
const reversal = myFunction(inputValue);

if (inputValue === reversal){
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
    return string;
}



function displayMessage(text){

container.appendChild(section);
section.appendChild(para);
para.textContent = text;
para.classList.add("para")
}