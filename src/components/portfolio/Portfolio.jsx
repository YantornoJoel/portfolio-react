import React, { useEffect, useState } from 'react'
import { PortfolioList } from '../portfolioList/PortfolioList'
import {
    ultimosPortfolio,
    reactPortfolio,
    reactNativePortfolio,
    maquetacionesPortfolio,
    otrosPortfolio
} from '../../data';

import './portfolio.scss';


export const Portfolio = () => {

    const [selected, setSelected] = useState("ultimos");
    const [data, setData] = useState([])

    const list = [
        {
            id: "ultimos",
            title: "Últimos"
        },
        {
            id: "reactjs",
            title: "Reactjs"
        },
        {
            id: "react-native",
            title: "React Native"
        },
        {
            id: "maquetaciones",
            title: "Maquetaciones"
        },
        {
            id: "otros",
            title: "Otros"
        }
    ]

    useEffect(() => {
        switch (selected) {

            case "ultimos":
                setData(ultimosPortfolio);
                break;
            case "reactjs":
                setData(reactPortfolio);
                break;
            case "react-native":
                setData(reactNativePortfolio);
                break;
            case "maquetaciones":
                setData(maquetacionesPortfolio);
                break;
            case "otros":
                setData(otrosPortfolio);
                break;
            default:
                setData(ultimosPortfolio);
        }
    }, [selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>PROYECTOS</h1>

            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(data => (

                    <div className="item" key={data.id}>
                        <img src={data.img} alt="blog" />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
