import React, { useState } from 'react'

export default function Light() {
    const [mode, setMode] = useState("Dark Mode")
    const [card, setbgCard] = useState()
    const [bgColor, setbgColor] = useState(
        
    )

    const allLight = () => {
        setbgColor({
            backgroundColor: "white",
            color: "black",
        })
        setbgCard({
            backgroundColor: "white",
            color : "black",
        })
        setMode("Dark Mode")
    }
    
    const allDark = () => {
        setbgColor({
            backgroundColor: "black",
            color:"white"
        })
        setbgCard({
            backgroundColor: "black",
            color : "white",
            border: "1px solid white"
        })
        setMode("Light Mode")
    }

    const AllbgColor = () =>{
        
    }

    return (
        <div className='FullForm py-45' style={bgColor} >
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" id='bgNavbar' >
                <h5 className="my-0 mr-md-auto font-weight-normal">Color Change</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a onClick={AllbgColor} className="btn-primary btn " id='dark' href="#">{mode}</a>
                </nav>
            </div>

            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
            </div>

            <div className="container">
                <div className="card-deck mb-3 text-center"> 
                    <div className="card mb-4 box-shadow"  style={card}>
                        <div className="card-header"   style={card}>
                            <h4 className="my-0 font-weight-normal">Free</h4>
                        </div>
                        <div className="card-body"  >
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Sign up for free</button>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow" style={card}>
                        <div className="card-header"   style={card}>
                            <h4 className="my-0 font-weight-normal">Pro</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>20 users included</li>
                                <li>10 GB of storage</li>
                                <li>Priority email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow" style={card}>
                        <div className="card-header"  style={card}>
                            <h4 className="my-0 font-weight-normal">Enterprise</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>30 users included</li>
                                <li>15 GB of storage</li>
                                <li>Phone and email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}