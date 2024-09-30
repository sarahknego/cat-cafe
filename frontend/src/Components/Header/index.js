import React from "react";
import "./styles.css";
import logo from "../../../src/images/kitty-corner-cafe-logo.svg";
 

export default function Header() {
    return (
        <> 
        <header>
            <div className="header-box">
                <nav>
                    <div className="nav-links">
                        <a href="/cats">Our Cats</a>
                        <a href="/drinks">Drinks</a>
                        <a href="/rooms">Rooms</a>
                    </div>
                    <a href="/"><img src={logo} className="logo" width="175px" /></a>
                    <a href="/reserve" className="reserve-btn">Make a Reservation</a>
                </nav>
                <div className="disclaimer">
                    <p>Hi! Just a heads up, I'm not paying for fast load times. API could take 5 minutes to respond. Sorry!</p>
                </div>
            </div>
        </header>
        </>
    )
};