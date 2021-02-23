import React from 'react';
import ReactDOM from 'react-dom';
import './AccessToolbar.css';

function AccessToolbar() {
  return (
    <div className="App">

      <div className="dbAssistToolbar">
        <a href="#" >Text-To-Speech</a>
        <a href="#" >Speech-To-Text</a>

        <a id="link1em" href="#" className="class1em" onClick={() => handleClick('link1em')}>A</a>
        <a id="link12em" href="#" className="class12em" onClick={() => handleClick('link12em')}>A</a>
        <a id="link17em" href="#" className="class17em" onClick={() => handleClick('link17em')}>A</a>
      </div>

      <p>This is plain text</p>
      <h1>This is h1 text</h1>
      <h2>This is h2 text</h2>
      <h3>This is h3 text</h3>
      <h4>This is h4 text</h4>

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

export default AccessToolbar;
