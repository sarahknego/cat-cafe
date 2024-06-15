import React from "react";
import {useLoaderData, Link} from "react-router-dom"
import CatCard from ".//Components/CatCard"
import "./Cats.css"

export default function Cats() {
    const data = useLoaderData()
    console.log(data)
    return(
        <>
        <div className="cats-page">
            <h1 className="cats-page-title">Our Cats</h1>
            <div>
                {data?.data.length ? <div className="cat-cards-page" >
                {data.data.map((item) => (
                    <CatCard cat={item} key={item.id} />
                ))}
                </div> : (<p>Loading cats...</p>)}
            </div>
          </div>
        </>
    )
}