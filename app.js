var screenDiv = document.getElementById("screen")
  
var result;

function getValue(value) {
 screenDiv.innerText += value  

if (value === '=') {
   var result = eval(screenDiv.innerText)
   screenDiv.innerText = result
}
 if (value === 'C') {
    screenDiv.innerText = " "
 }
 if (value === 'Del') {
    screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length - 4)
 }
}