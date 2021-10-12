import React, { useState } from 'react'
import './works.scss'


export const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    const data = [
        {
            id: "1",
            icon: "./assets/pc.png",
            title: "PRESUPUESTO APP",
            description: 'Aplicación que permite ingresar un presupuesto, para luego agregar gastos y ver el resultado.',
            from: 'Hecho con Reactjs.',
            img: "https://res.cloudinary.com/ddbujqxjh/image/upload/v1633563725/Imagenes%20para%20portfolio/gastos-react_cicimp.png",
            link: "https://jy-presupuesto.netlify.app/"
        },
        {
            id: "2",
            icon: "./assets/pc.png",
            title: "NOTAS APP",
            description: 'Aplicación que permite crear, editar, y eliminar notas, con un usuario previamente logueado a través de una cuenta de Google.',
            from: 'Hecho con Reactjs - Firebase - Cloudinary.',
            img: "https://res.cloudinary.com/ddbujqxjh/image/upload/v1633563728/Imagenes%20para%20portfolio/journalApp-notas-firebase-login_murvxy.png",
            link: "https://github.com/YantornoJoel/journal-app-react"
        },
        {
            id: "3",
            icon: "./assets/pc.png",
            title: "HEROES APP",
            description: 'Aplicación que permite buscar heroes tanto de Marvel como de Dc.',
            from: 'Hecho con Reactjs.',
            img: "https://res.cloudinary.com/ddbujqxjh/image/upload/v1633563728/Imagenes%20para%20portfolio/heroes-app_kxsiqt.png",
            link: "https://jy-heroes-app.netlify.app"
        },
        {
            id: "4",
            icon: "./assets/pc.png",
            title: "NSLP",
            description: 'Sitio web hecho para el Instituto Superior Nuestra Señora de la Paz.',
            from: 'Hecho con Wordpress.',
            img: "https://res.cloudinary.com/ddbujqxjh/image/upload/v1633666226/Imagenes%20para%20portfolio/wordpress_ezxwud.png",
            link: "https://webnslp.000webhostapp.com/"
        },
        {
            id: "5",
            icon: "./assets/pc.png",
            title: "NOTAS",
            description: 'Aplicación que permite crear, editar y eliminar notas, con un usuario previamente logueado.',
            from: 'Hecho con Nodejs.',
            img: "https://res.cloudinary.com/ddbujqxjh/image/upload/v1633563731/Imagenes%20para%20portfolio/node-login-frontJs_edbfxn.png",
            link: "https://github.com/YantornoJoel/NodeMongoLoginNotes"
        },
        {
            id: "6",
            icon: "./assets/pc.png",
            title: "GIF APP",
            description: 'Aplicación que permite buscar gifs.',
            from: 'Hecho con Reactjs.',
            img: "https://res.cloudinary.com/ddbujqxjh/image/upload/v1633563732/Imagenes%20para%20portfolio/gifApp_y8z8ql.png",
            link: "https://yantornojoel.github.io/react-gif-app/"
        }
    ]

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(data => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                    <p style={{ fontStyle: 'italic' }}>{data.from}</p>
                                    <a href={data.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>Ir al proyecto...</span>
                                    </a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={data.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick()} />

            <div className="tecnologias">
                <img src="assets/html.png" alt="Html" />
                <img src="assets/css.png" alt="Css" />
                <img src="assets/sass.png" alt="Sass" />
                <img src="assets/bootstrap.jpeg" alt="Bootstrap" />
                <img src="assets/js.png" alt="Js" />
                <img src="assets/react.png" alt="React" />
                <img src="assets/node.png" alt="Node" />
                <img src="assets/mongodb.png" alt="Mongodb" />
                <img src="assets/firebase.png" alt="Firebase" />
                <img src="assets/cloudinary.png" alt="Cloudinary" />
            </div>
        </div>
    )
}
