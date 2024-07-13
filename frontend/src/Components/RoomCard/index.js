import React from "react";
import "./styles.css";
import {Link} from "react-router-dom"

export default function RoomCard({room}) {
    // console.log(room.id)
    return (
        <>
            <Link to={"/rooms/" + room.id} className="room-card">
                <img src={room.photo} className="room-photo" />
                <p className="room-name">{room.name}</p>
            </Link>
        </>
    )
}