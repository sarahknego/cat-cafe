import React from "react";
import "./styles.css";
import drinkPlaceholder from "../../drink-placeholder.svg"

export default function DrinkCard() {
    return (
        <>
            <div className="drink-card">
                <img src={drinkPlaceholder} className="drink-photo" />
                <p className="drink-name">Bubblegum Boba</p>
            </div>
        </>
    )
}