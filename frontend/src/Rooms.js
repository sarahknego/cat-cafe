import React from "react";
import {useLoaderData} from "react-router-dom";
import RoomCard from ".//Components/RoomCard";
import "./Rooms.css";

export default function Rooms() {
    const data = useLoaderData();
    return(
        <>
            <div className="rooms-page">
                <h1 className="rooms-page-title">Rooms</h1>
                <div>
                    {data?.data.length ? <div className="rooms-cards-page" >
                    {data.data.map((item) => (
                        <RoomCard room={item} key={item.id} />
                    ))}
                    </div> : (<p>Loading rooms...</p>)}
                </div>
            </div>
        </>
    )
};