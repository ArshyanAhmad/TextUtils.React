import React from 'react'
import { useState } from 'react';

export default function Form(props) {
    // State Variable
    
    const handleUpClick = () => {
        const value = Text.toUpperCase();
        setText(value)
    }
    
    const handleLoClick = () => {
        const value = Text.toLowerCase();
        setText(value)
    }


    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    
    const [Text, setText] = useState("")
    return (
        //   Form Start
        <div className="container my-4">
            <h1>{props.heading}</h1>
            <div className="form-group" id='textarea'>
                <textarea className="form-control" value={Text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>

            <div className="buttons">
                <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
        </div>
    )
}

// state Variable
// const [text, setText] = useState(0)
// text = "Text Chnnge"  // Wrong Method
// setText("Set Text Variable")  // Right Method

// value set in textarea set

// onchange if change the textarea then its run


// onclick is a function  to call when its clicked up

