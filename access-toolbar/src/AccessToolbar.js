import React from 'react';
import ReactDOM from 'react-dom';
import * as googleTTS from 'google-tts-api';
import './AccessToolbar.css';

function AccessToolbar() {
  return (
    <div className="dbAssistToolbar">

      {/* <div className="dbAssistToolbar"> */}
      <a href="#" >Text-To-Speech</a>
      <a href="#" onClick={() => textToSpeech()}>Speech-To-Text</a>

      <a id="link1em" href="#" className="class1em" onClick={() => handleClick('link1em')}>A</a>
      <a id="link12em" href="#" className="class12em" onClick={() => handleClick('link12em')}>A</a>
      <a id="link17em" href="#" className="class17em" onClick={() => handleClick('link17em')}>A</a>

      <a id="linkReadingGuide" href="#" className="" onClick={() => togglereadingGuide()}>Reading Guide</a>
      {/* </div> */}

    </div>
  );
}

function handleClick(i) {
  document.body.classList.remove('class1em');
  document.body.classList.remove('class12em');
  document.body.classList.remove('class17em');


  document.getElementById("link1em").classList.remove('current');
  document.getElementById("link12em").classList.remove('current');
  document.getElementById("link17em").classList.remove('current');

  document.body.classList.add(document.getElementById(i).className);
  document.getElementById(i).classList.add('current');
}

function textToSpeech() {
  var s = googleTTS.getAudioUrl(document.body.innerText);
  console.log(s);
}

function togglereadingGuide() {
  if (document.getElementById('readingGuide') != undefined) {
    document.body.removeChild(document.getElementById('readingGuide'))
  }
  else {
    var node = document.createElement("div");
    node.className = "readingGuide";
    node.id = "readingGuide";
    var event = event || window.event;
    node.style.top = (event.clientY + 10) + 'px';
    console.log(event.clientY)
    document.body.appendChild(node);
    document.body.addEventListener("mousemove", mouseMovement);
  }
}


function mouseMovement(event) {
  event = event || window.event;
  var readingGuide = document.getElementById('readingGuide');
  if (readingGuide) {
    readingGuide.style.top = (event.clientY + 10) + 'px';
  }
}

export default AccessToolbar;
