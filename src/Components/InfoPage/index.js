import React from "react";
import "./styles.css";
import placeholderPhoto from "../../drink-placeholder.svg"

export default function InfoPage() {
    return (
        <>
            <div className="product">
                <img className="product-photo" src={placeholderPhoto}/>
                <div className="product-info">
                    <h2 className="product-name">Bubblegum Boba</h2>
                    <p className="product-description">A sweet and colorful beverage
                         featuring chewy tapioca pearls, infused 
                        with the nostalgic flavor of bubblegum.</p>
                    <a href="/drinks" className="product-button">Order this Drink</a>
                </div>
            </div>
        </>
    )
}