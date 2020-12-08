import { postMessage } from './services.js'

function postTextFromArea(message) {
    if (message.trim().length >= 21) {
        postMessage(message).then(res => {
            console.log(res.data);
        })//postFnk
    }//if
    else {
        alert('poruka je prazna')
    }
}//fnk

function convertToBPCode(message) {
    let nizZnakova = 'qwertyuiopasdfghjklzxcvbnm;:{}[]<>,.?~`/1234567890'.split('');

    let messageArray = message.trim().split('');
    for (let i = 0; i < 10; i++) {
        let char1 = nizZnakova[Math.floor(Math.random() * 26)]
        let char2 = nizZnakova[Math.floor(Math.random() * 26)]
        messageArray.unshift(char1);
        messageArray.push(char2);
    }/////for2

    console.log('obicna trimovana i splitovana poruka ', messageArray.join(''));
    messageArray = messageArray.map(el => {
        let maliNiz = ['w', 'q'];
        let space = maliNiz[Math.floor(Math.random() * 2)]
        if (el == ' ') return space
        else if (el == ',') return 'zrz'
        else if (el == '.') return 'tacka'
        else if (el == '1') return 'jedan'
        else if (el == '2') return 'dva'
        else if (el == '3') return 'tri'
        else if (el == '4') return 'cetiri'
        else if (el == '5') return 'pet'
        else if (el == '6') return 'sest'
        else if (el == '7') return 'sedam'
        else if (el == '8') return 'osam'
        else if (el == '9') return 'devet'
        else {
            return el;
        }
    })
    // console.log('posle mapiranja ',messageArray.join(''));
    let text2 = messageArray.join('')
    messageArray = text2.split('')

    ///
    ///
    ///

    for (let i = 10; i < messageArray.length - 11; i += 2) {
        let char1 = nizZnakova[Math.floor(Math.random() * 26)]
        // let char2 = nizZnakova[Math.floor(Math.random()*26)]
        messageArray.splice(i + 1, 0, char1)
    }/////for1
    //  console.log(messageArray.join(''));






    // console.log(messageArray.join(''),'   krajnjeeeeeeeee');

    return messageArray.join('');

}
function convertToNorm(text) {

    let charArray = text.trim().split('')

    charArray.splice(0, 10)
    charArray.splice(charArray.length - 10, 10)

    let duzinaNiza = charArray.length;
    for (let i = 0; i < duzinaNiza; i++) {
        if (i % 2 !== 0) {
            charArray.splice(i, 1, null)
        }
    }
    text = charArray.filter(el => el !== null).map(el => {
        return (
            el == 'w' || el == 'q' ? ' ' : el
        )
    }).join('')

    // console.log(text);
    return text;
}/////fnk convertToNorm end



let button = document.getElementById('button');
button.addEventListener('click', () => {

    let textArea = document.getElementById('textArea')
    let bscode = convertToBPCode(textArea.value)
    postTextFromArea(bscode);
    textArea.innerText = '';
    textArea.value = '';
    // let textArea = document.getElementById('textArea').value.trim();


    // convertToNorm('ejcxnifjtvjieodfawnkzbrpzjdtvgamzvrtzftmrpizzlrtzjccewtiiwrlidzkrpzhpjeztvzbrfzpzgrozvzfrezszqrzzozgrkzltvatcokbartcakcqkiantbaecrklayteaxcqkcaatsaxcwkkazjkepdladnpdbvhanzurhzgtsrtibjuejdeaqnitbahcwkdanzprszhtlrfiktaajcdkyayjrewdhasntzlrazntorjinthamczktahdgvtamtkroiwztrpzbceemtgifrxiotyatcskoazctcwrblyy')



})



let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {

    //  let textArea2 = document.getElementById('textArea2').value.trim()
    //  let translate = convertToNorm(textArea2);
    //console.log(translate);
})

let gate = document.getElementById('gate');
let brojac=0;
gate.addEventListener('click',()=>{
    console.log(12345);
    let wraper = document.getElementById('wraper');
    brojac++;
    if(brojac>7)
    wraper.className='nothing'
})

