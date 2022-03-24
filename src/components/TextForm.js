import React, { useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=> {
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase!","success");
  }

  const handleDownClick = ()=> {
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase!","success");
  }
  const handleCTClick = ()=> {
    setText('');
    props.showAlert("Text cleared!","success");
  }
  const handleTGClick = ()=> {
    text === text.toUpperCase()?setText(text.toLowerCase()): setText(text.toUpperCase())
    props.showAlert("Text toggled!","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!","success");
}
  

  const handleOnChange = (event)=> setText(event.target.value);

  const [text, setText] = useState('');
   // setText("Text Here...");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"/>
      </div>
      <button className="btn btn-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1"  onClick={handleCTClick}>Clear Text</button>
      <button className="btn btn-primary mx-1"  onClick={handleTGClick}>Toggle Text</button>
      <button className="btn btn-primary mx-1"  onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1"  onClick={ handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>You Text Summary</h2>
      <p>{(text.split(" ").length)-1} words and {text.length} characters</p>
      <p>{(0.008*text.split(" ").length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
