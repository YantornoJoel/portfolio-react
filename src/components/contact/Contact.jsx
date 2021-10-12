import React, { useState } from 'react'
import './contact.scss'

export const Contact = () => {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="contacto" />
            </div>
            <div className="right">
                <h2>Contacto.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" />
                    <textarea placeholder="Mensaje" name="mensaje"></textarea>
                    <button type="submit">Enviar</button>
                    {message && <span>Gracias, su mensaje ha sido enviado.</span>}
                </form>
            </div>
        </div >
    )
}
