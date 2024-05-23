import React, {useState} from 'react'

export default function Textform(props) {
   const[text, setText] = useState("Enter text to convert");

   const handleUppercaseText = () => {
    const newUppercaseText = text.toUpperCase();
    setText(newUppercaseText);
   }

   const handleLowercaseText = () => {
    const newLowercaseText = text.toLowerCase();
    setText(newLowercaseText);
   }

   const handleCapitalcaseText = () => {
    const newCapitalcaseText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    setText(newCapitalcaseText);
   }

   const handleClearText = () => {
    const newClearText = '';
    setText(newClearText);
   }

   const handleOnChange = (event) => {
   setText(event.target.value);
   }

   const handleCopy = () => {
    var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

    return (
        <>
        <div className='container my-5'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-outline-success mx-2" onClick={handleUppercaseText}>UPPER CASE</button>
            <button type="button" className="btn btn-outline-success mx-2" onClick={handleLowercaseText}>lower case</button>
            <button type="button" className="btn btn-outline-success mx-2" onClick={handleCapitalcaseText}>Capitalized Case</button>
            <button type="button" className="btn btn-outline-success mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-outline-success mx-2" onClick={handleClearText}>Clear Text</button>
        </div>

        <div className="container my-2">
            <h2><b>Your Input Summary</b></h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <h2><b>Preview</b></h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
