import React, { useEffect, useRef } from 'react'
import { init } from 'ityped';
import './index.scss'

// import {KeyboardArrowDown} from '@material-ui/icons';

export const Index = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Reactjs", "Junior"]
        });
    }, [])

    return (
        <div className="index" id="index">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/yo.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hola, mi nombre es</h2>
                    <h1>Joel Yantorno</h1>
                    <h3>Desarrollador <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                    {/* <KeyboardArrowDown/> */}
                </a>
            </div>
        </div>
    )
}
