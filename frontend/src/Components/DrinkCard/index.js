import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";

export default function DrinkCard({drink}) {
    return (
        <>
            <Link to= {"/drinks/" + drink.id} className="drink-card">
                <img src={drink.photo} loading="lazy" className="drink-photo" />
                <p className="drink-name">{drink.name}</p>
            </Link>
        </>
    )
};