import React, {useState} from 'react';
import Darkmode from './Darkmode';
var wordLen;

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    function words(){
        // eslint-disable-next-line no-cond-assign
        if (len = 0) {
            wordLen = 0;
            return(wordLen)
        }
        else{
            wordLen = text.split(" ").length;
            console.log(wordLen)
            return(wordLen)
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    // eslint-disable-next-line no-unused-vars
    var len = text.length

    return (
        <>
            <div className='container '>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" placeholder="Enter text here"></textarea>
                    <button className="btn btn-outline-dark" onClick={handleUpClick} >Convert to UPPERCASE</button>
                    <button className="btn btn-outline-dark m-3" onClick={handleLowClick} >Convert to lowercase</button>
                    <button className="btn btn-outline-dark" onClick={handleClearClick} >Clear text</button>
                    <Darkmode />
                </div>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{words()} words and {text.length} characters</p>
                <p>{0.008*words()} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
