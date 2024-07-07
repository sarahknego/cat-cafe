import React from "react";
import {useLoaderData, Link} from "react-router-dom"
import ReservationCard from "./Components/ReservationCard"
import "./Reservations.css"

export default function Reservations() {
    const data = useLoaderData()
    console.log(data.data)
    return(
        <>
            <div className="reservations-page">
                <h1 className="reservations-page-title">Reservations</h1>
                <div className="reservations-cards-wrapper">
                    {data?.data.length ? <div className="reservations-cards-page" >
                    {data.data.map((item) => (
                        <ReservationCard reservation={item} key={item.id} />
                    ))}
                    </div> : (<p>Loading reservations...</p>)}
                </div>
            </div>
        </>
    )
}