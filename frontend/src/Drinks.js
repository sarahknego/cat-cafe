import React from "react";
import {useLoaderData, Link} from "react-router-dom"
import DrinkCard from ".//Components/DrinkCard"
import "./Drinks.css"

export default function Drinks() {
    const data = useLoaderData()
    // console.log(data)
    return(
        <>
            <div className="drinks-page">
                <h1 className="drinks-page-title">Drinks</h1>
                <div>
                    {data?.data.length ? <div className="drink-cards-page" >
                    {data.data.map((item) => (
                        <DrinkCard drink={item} key={item.id} />
                    ))}
                    </div> : (<p>Loading drinks...</p>)}
                </div>
            </div>
        </>
    )
}