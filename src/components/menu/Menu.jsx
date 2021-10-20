import React from 'react';
import { LinkedIn, GitHub, Create } from '@material-ui/icons/';
import './menu.scss';

export const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`menu ${menuOpen && 'active'}`}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#index">Inicio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Trabajos</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
            <div className="wrapper">
                <div className="itemContainer">
                    <a href="https://github.com/YantornoJoel?tab=repositories" target="_blank" rel="noreferrer" >
                        <GitHub className="icon" />
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/joel-yantorno-72550218a" target="_blank" rel="noreferrer" >
                        <LinkedIn className="icon" />
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://codepen.io/yantornojoel" target="_blank" rel="noreferrer" >
                        <Create className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
