import logo from './logo.svg';
import './App.css';
import AccessToolbar from 'accesstoolbar-hackathon-demo/lib/AccessToolbar'

function App() {
  return (
    <div className="App">

      {/* <div className="dbAssistToolbar">
        <a href="#" >Text-To-Speech</a>
        <a href="#" >Speech-To-Text</a>

        <a id="link1em" href="#" className="class1em" onClick={() => handleClick('link1em')}>A</a>
        <a id="link12em" href="#" className="class12em" onClick={() => handleClick('link12em')}>A</a>
        <a id="link17em" href="#" className="class17em" onClick={() => handleClick('link17em')}>A</a>
      </div>*/}
      <AccessToolbar></AccessToolbar>

      <p>This is plain text</p>
      <h1>This is h1 text</h1>
      <h2>This is h2 text</h2>
      <h3>This is h3 text</h3>
      <h4>This is h4 text</h4>


      {/* <a id="linkReadGuide" href="#" className="readGuide" onClick={() => toggleReaderGuide1()}>Reader Guide</a> */}
    </div>
  );
}

// function handleClick(i) {
//   document.body.classList.remove('class1em');
//   document.body.classList.remove('class12em');
//   document.body.classList.remove('class17em');


//   document.getElementById("link1em").classList.remove('current');
//   document.getElementById("link12em").classList.remove('current');
//   document.getElementById("link17em").classList.remove('current');

//   document.body.classList.add(document.getElementById(i).className);
//   document.getElementById(i).classList.add('current');
// }

// function toggleReaderGuide1() {
//   if (document.getElementById('readerGuide') != undefined) {
//     document.body.removeChild(document.getElementById('readerGuide'))
//   }
//   else {
//     var node = document.createElement("div");
//     node.className = "readerGuide";
//     node.id = "readerGuide";
//     var event = event || window.event;
//     node.style.top = (event.clientY + 10) + 'px';
//     console.log(event.clientY)
//     document.body.appendChild(node);
//     document.body.addEventListener("mousemove", mouseMovement);
//   }
// }


// function mouseMovement(event) {
//   event = event || window.event;
//   var readerGuide = document.getElementById('readerGuide');
//   if (readerGuide) {
//     readerGuide.style.top = (event.clientY + 10) + 'px';
//   }
// }

export default App;
