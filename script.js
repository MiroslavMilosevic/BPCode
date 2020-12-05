import { postMessage } from './services.js'

function postTextFromArea(message) {
    if (message.trim().length >= 1) {
        postMessage(message).then(res => {
            console.log(res.data);
        })//postFnk
    }//if
    else{
        alert('poruka je prazna')
    }
}//fnk

function convertToBPCode(message){


}
function convertToNorm(text){

let charArray = text.trim().split('')

charArray.splice(0, 10)
charArray.splice(charArray.length-10,10)
console.log(charArray);
let duzinaNiza=charArray.length;
for(let i=0;i<duzinaNiza;i++){
    if(i%2!==0){
       charArray.splice(i,1,null)
    }
}

 text=charArray.filter(el=>el!==null).map(el=>{
     return(
         el=='w'||el=='q'? ' ':el
     )
 }).join('')

console.log(text);
}



let button = document.getElementById('button');
button.addEventListener('click', ()=>{
    // let textArea = document.getElementById('textArea')
    // postTextFromArea(textArea.value.trim());
    // textArea.innerText='';
    // textArea.value='';
    
         let textArea = document.getElementById('textArea').value.trim();
   
         convertToNorm(textArea)
 

})

