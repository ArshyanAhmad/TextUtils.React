import React, { useState } from 'react'

export default function About() {
    const [mode, setMode] = useState("Light Mode")
    const [contStyle, setContStyle] = useState({
        backgroundColor: "white",
        color: "black",
    })
    const [jumboStyle, setJumboStyle] = useState({
        backgroundColor: "#222",
        color: "white",
    })
    
    const darkMode = () => {
        setContStyle({
            backgroundColor: "#000",
            color: "white",
        })
        setJumboStyle({
            backgroundColor: "#222",
            color: "white",
        })
        setMode("Dark Mode")
        document.getElementById("btn-dark").style.display = "none"
        document.getElementById("btn-light").style.display = "block"
    }
    
    const lightMode = () =>{
        setMode("Light Mode")
        setContStyle({
            backgroundColor: "white",
            color: "black",
        })
        setJumboStyle({
            backgroundColor: "#ccc",
            color: "black",
        })
        document.getElementById("btn-light").style.display = "none"
        document.getElementById("btn-dark").style.display = "block"
    }

    return (
        <div className='container-fluid p-5' style={contStyle}>
            <div class="jumbotron" style={jumboStyle}>
                <h1 class="display-4">{mode}</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <div className="button">
                <button id='btn-dark' onClick={darkMode} className="btn btn-dark mx-2" >Dark Mode</button>
                <button id='btn-light' onClick={lightMode} className="btn btn-light mx-2">Light Mode</button>
            </div>
        </div>
    )
}
