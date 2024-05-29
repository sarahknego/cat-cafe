import React from "react"
import "./styles.css"
import logo from "../../../src/images/kcc-monochrome.svg"

export default function Footer() {
    return (
        <>
            <footer>
                <nav>
                    <div className="nav-links">
                        <a href="/cats">Our Cats</a>
                        <a href="/drinks">Drinks</a>
                        <a href="/rooms">Rooms</a>
                    </div>
                    <div className="center">
                        <p className="not-real">Nothing on this website is real</p>
                        <a href="/home"><img src={logo} className="mono-logo" width="175px" /></a>
                    </div> 
                    <a href="/reserve" className="reserve-btn">Make a Reservation</a>
                </nav>
            </footer>
        </>
    )
}