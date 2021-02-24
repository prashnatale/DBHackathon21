import React from 'react';
import ReactDOM from 'react-dom';
import './AccessToolbar.css';

function AccessToolbar() {
  return (
    <div className="dbAssistToolbar">

      {/* <div className="dbAssistToolbar"> */}
      <a href="#" >Text-To-Speech</a>
      <a href="#" onClick={() => gettext()}>Speech-To-Text</a>

      <a id="link1em" href="#" className="class1em" onClick={() => handleClick('link1em')}>A</a>
      <a id="link12em" href="#" className="class12em" onClick={() => handleClick('link12em')}>A</a>
      <a id="link17em" href="#" className="class17em" onClick={() => handleClick('link17em')}>A</a>
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

function gettext() {
  alert(document.body.innerText);
}

export default AccessToolbar;
