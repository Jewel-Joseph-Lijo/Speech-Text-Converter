import React,{ useState } from 'react';
import TTS from './TTS';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [spokenText, setSpokenText] = useState('');
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  
  const handleSpeak = () => {
    setSpokenText(text);
  };
  
  return (
    <div className='main'>
      <h1 className='main-heading'>Text To Speech Converter</h1>
      <input type="text" value={text} onChange={handleTextChange} className='input'/>
      <button onClick={handleSpeak} className='speak-button'>Speak</button>
      <TTS spokenText={spokenText} />
    </div>
  )
}
export default App;