import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="w3-top">
                <div className="w3-bar" id="myNavbar">
                    <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
                        <i className="fa fa-bars"></i>
                    </a>
                    <a href="#home" className="w3-bar-item w3-button">HOME</a>
                    <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
                    <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
                    <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
                    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                        <i className="fa fa-search"></i>
                    </a>
                </div>

                <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                    <a href="#about" className="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
                    <a href="#portfolio" className="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
                    <a href="#contact" className="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
                    <a href="#" className="w3-bar-item w3-button">SEARCH</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
