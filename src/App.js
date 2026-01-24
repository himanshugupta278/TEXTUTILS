import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // light | dark

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter Your Text To Analyze Below" mode={mode} />
    </>
  );
}

export default App;
