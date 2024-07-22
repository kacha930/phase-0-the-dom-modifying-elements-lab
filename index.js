// Write your code here!

document.querySelector('main#main').remove();

//store
let newHeader = document.createElement('h1');

newHeader.id = "victory";
// html content
newHeader.innerHTML = "rabanne is the champion";
document.body.appendChild(newHeader);