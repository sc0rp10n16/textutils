import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-outline-dark my-3" onClick={handleUpClick} >Convert to UPPERCASE</button>
            </div>
        </div>
    )
}
