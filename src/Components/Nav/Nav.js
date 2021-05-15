import React from 'react'
import logo from '../../assets/lightning.png'
import './Nav.css'

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flah-logo" />
                <p className="flash-logo-text">Flash Type</p>
            </div>
            <div className="nav-right">
                <a href="#" target="_blank" className="nav-link">Linkedin</a>
            </div>
        </div>
    )
}

export default Nav
