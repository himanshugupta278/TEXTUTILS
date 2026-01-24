import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  // ✅ WORD COUNT (CLEAN LOGIC)
  const wordCount = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  const handleUpclick = () => {
    setText(text.toUpperCase());
  };

  const handleLoclick = () => {
    setText(text.toLowerCase());
  };

  const handClearclick = () => {
    setText("");
  };

  const handcopyclick = () => {
    navigator.clipboard.writeText(text);
  };

  const handCapitalizeclick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map(word =>
        word ? word.charAt(0).toUpperCase() + word.slice(1) : ""
      )
      .join(" ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {/* ===== TEXT AREA SECTION ===== */}
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          transition: "all 0.5s ease"
        }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            color: props.mode === "dark" ? "white" : "black",
            transition: "all 0.5s ease"
          }}
        ></textarea>

        {/* ===== BUTTONS (MOBILE FRIENDLY) ===== */}
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={handleUpclick}>
            Convert To Uppercase
          </button>

          <button className="btn btn-primary" onClick={handleLoclick}>
            Convert To Lowercase
          </button>

          <button className="btn btn-primary" onClick={handCapitalizeclick}>
            Capitalize Each Word
          </button>

          <button className="btn btn-primary" onClick={handcopyclick}>
            Copy Text
          </button>

          <button className="btn btn-danger" onClick={handClearclick}>
            Clear Text
          </button>
        </div>
      </div>

      {/* ===== SUMMARY SECTION ===== */}
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          transition: "all 0.5s ease"
        }}
      >
        <h2>Your Text Summary</h2>
        <p>{wordCount} Words & {text.length} Characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
