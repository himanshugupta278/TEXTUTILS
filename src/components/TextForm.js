import React, { useState } from 'react';
 
export default function TextForm(props) {
  const [text, setText] = useState("");
    let words = text.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      count++;
    }
  }
  const handleUpclick =()=> {
    // console.log("Uppercase was clicked" + text )
    let newtext = text.toUpperCase();
    setText(newtext)
  }
   const handleLoclick =()=> {
    // console.log("Lowercase was clicked" + text )
    let newtext = text.toLowerCase();
    setText(newtext)
  }
   const handClearclick = () => {
    // console.log("ClearText was clicked" + text )
    setText("");
  }
   const handcopyclick = () => {
    // console.log("CopyText was clicked" + text )
     navigator.clipboard.writeText(text);
  }
   const handCapitalizeclick = () => {
    // console.log("Capitalize Each Word was clicked" + text )
     let newText = text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    setText(newText);
   }
  const handleOnChange =(event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }
  return (
    <> 
     <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3 ">
        <textarea className="form-control my-3 mb-3" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick} >Conver To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick} >Conver To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handClearclick} >Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handcopyclick} >Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handCapitalizeclick} >Capitalize Each Word</button>
      <button className="btn btn-primary mx-2" onClick={handClearclick} >Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{count} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 
    </>

  )
}
