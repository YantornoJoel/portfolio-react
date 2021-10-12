import React from 'react';
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
        </div>
    )
}
