import React from 'react'

import { Person, Mail } from '@material-ui/icons/';
import './navMenu.scss'

export const NavMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navMenu ${menuOpen && 'active'}`}>
            <div className="wrapper">
                <div className="left">
                    {/* <p className="logo">Joel Yantorno.</p> */}
                    <a href="#contact" className="logo">Portfolio</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>Joel Yantorno</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>yantornojoel@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="containerSpan" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="linea1"></span>
                        <span className="linea2"></span>
                        <span className="linea3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
