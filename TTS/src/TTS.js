import React from 'react';

function TTS(props) {
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(props.spokenText);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={handleSpeak} className='hear-button'>Hear Text</button>
    </div>
  );
}

export default TTS;