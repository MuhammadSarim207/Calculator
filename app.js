var screenDiv = document.getElementById("screen")
screenDiv.innerText += value
function getValue(value) {
  
   switch (value) {
      case '=' :
         var res = eval(screenDiv.innerText)
         screenDiv.innerText = res
         break;
   case 'Del' :
      screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length-1)
     break;
     case 'C' :
      screenDiv.innerText = ""
      break;
      default:
         screenDiv.innerText += value
         break;
   }
}