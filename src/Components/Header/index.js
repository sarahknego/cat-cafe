import React from "react"
import "./styles.css"
import logo from "../../kitty-corner-cafe-logo.svg"
 

export default function Header() {
    return (
        <> 
        <header>
            <nav>
                <div className="nav-links">
                    <a href="/cats">Our Cats</a>
                    <a href="/drinks">Drinks</a>
                    <a href="/rooms">Rooms</a>
                </div>
                <a href="/home"><img src={logo} className="logo" width="175px" /></a>
                <a href="/reserve" className="reserve-btn">Make a Reservation</a>
            </nav>
        </header>
        </>
    )
}