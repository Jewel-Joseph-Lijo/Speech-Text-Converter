let speech;
// Text-to-Speech
const textInput = document.getElementById('text-input');

function Speak(){
    const text = textInput.value.trim();
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.volume = 1;
        utterance.rate = 1;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    }
}

// Speech-to-Text
const recognizedText = document.getElementById('recognized-text');

let recognition= new webkitSpeechRecognition();
recognition.lang = 'en-US'; 
recognition.maxResults = 30;
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    recognizedText.textContent = transcript;
};

recognition.onerror = (event) => {
    alert("Error: " + event.error);
};

// Start recognition when the user clicks the Start Recognition button
function StartRecognition(){
    recognition.start();
    speech=true;
}

// Stop recognition when the user clicks the Stop Recognition button
function StopRecognition(){
    recognition.stop();
    speech=false;
}

if(speech!=true){
    alert("Speech recognition not supported in this browser.");
}