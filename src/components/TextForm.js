import React, { useState } from 'react';
 
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here" );
  const handleUpclick =()=> {
    console.log("Uppercase was clicked" + text )
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value)
     }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3 ">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick} >Conver To Uppercase</button>
    </div>
  )
}
