window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const Alexa = new SpeechRecognition();
const button = document.querySelector('input')

button.addEventListener('click' ,()=> Alexa.start)
Alexa.addEventListener('result', function(e) {
console.log('wiem co powedziałes')

});
