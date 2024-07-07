import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useLoaderData, Link} from "react-router-dom"
import { useState } from "react";
import dropdownArrow from "./images/dropdown-arrow.svg";
import "./Reserve.css"

export default function Reserve() {
    const [size, setSize] = useState("")
    const [date, setDate] = useState("");
    const currentDate = (date) => new Date() < date;
    return (
        <div className="reservation-page">
            <h1 className="make-reservation">Make a reservation</h1>
            <div className="reservation-form">
                <div className="about-you">
                    <p>About You</p>
                    <input type="text" placeholder="Name *" required />
                    <input type="email" placeholder="Email *" required />
                    <input type="tel" placeholder="Phone number *" required />
                    <input type="number" placeholder="Party size *" min="1" max="15" value={size} onChange={(event) => {
                        setSize(event.target.value || 1)
                         if (event.target.value > 15) {
                            setSize(15)
                         }
                    }} required />
                </div>
                <div className="reserve-details">
                    <p>What would you like to reserve?</p>
                    <div className="selectors">
                        <div className="dropdown-wrapper">
                            <img src={dropdownArrow} className="dropdown-arrow" />
                            <select id="choose-cat">
                                <option disabled selected>Choose your cat *</option>
                                <option value="Charlie">Charlie</option>
                                <option value="Lola">Lola</option>
                                <option value="Nina">Nina</option>
                                <option value="Louis">Louis</option>
                                <option value="Archibald">Archibald</option>
                                <option value="Blue">Blue</option>
                                <option value="Socks">Socks</option>
                            </select>
                        </div>
                        <div className="dropdown-wrapper">
                        <img src={dropdownArrow} className="dropdown-arrow" />
                            <select id="choose-drink">
                                <option disabled selected>Choose your drink *</option>
                                <option value="Buublegum-Boba">Bubblegum Boba</option>
                                <option value="Rose-Latte">Rose Latte</option>
                                <option value="Iced-Chai-Latte">Iced Chai Latte</option>
                                <option value="Blended-Galaxy-Frappe">Blended Galaxy Frappe</option>
                                <option value="Espresso-Shots">Espresso Shots</option>
                                <option value="Unicorn-Milkshake">Unicorn Milkshake</option>
                                <option value="Iced-Pink-Matcha-Latte">Iced Pink Matcha Latte</option>
                                <option value="Pink-Lemonade">Pink Lemonade</option>
                                <option value="Unicorn-Smoothie">Unicorn Smoothie</option>
                            </select>
                        </div>
                        <div className="dropdown-wrapper">
                        <img src={dropdownArrow} className="dropdown-arrow" />
                            <select id="choose-room">
                                <option disabled selected>Choose your room *</option>
                                <option value="Outer-Space">Outer-Space</option>
                                <option value="Pirate-Ship">Pirate Ship</option>
                                <option value="Boba-Heaven">Boba Heaven</option>
                                <option value="High-Fantasy">High Fantasy</option>
                                <option value="Witch's-Lair">Witch's Lair</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="reservation-time">
                    <p>When would you like to stay with us?</p>
                    <div className="selectors">
                    <div>
                        <DatePicker 
                        placeholderText="When will you be joining us? *"
                        className="date-picker"
                        showTimeSelect
                        filterDate={currentDate}
                        minTime={new Date(0, 0, 0, 8, 0)}
                        maxTime={new Date(0, 0, 0, 18, 0)}
                        selected={date} 
                        onChange={(date) => setDate(date)}
                        onClick={(event) => console.log(event.target.value)}
                        dateFormat="MMMM d, yyyy   |   h:mmaa" />
                    </div>

                    <div className="dropdown-wrapper">
                        <img src={dropdownArrow} className="dropdown-arrow" />
                            <select id="stay-length">
                                <option disabled selected>How long will you stay? *</option>
                                <option value="30-min">30 minutes</option>
                                <option value="1-hr">1 hour</option>
                                <option value="1-hr-30-min">1 hour 30 minutes</option>
                                <option value="2-hr">2 hours</option>
                                <option value="2-hr-30-min">2 hours 30 minutes</option>
                                <option value="3-hr">3 hours</option>
                            </select>
                    </div>
                    </div>
                </div>
                <input type="submit" value="Submit" className="submit-button" />
            </div>
        </div>
    )
}
