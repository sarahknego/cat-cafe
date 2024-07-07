import React from "react";
import "./styles.css";
import {Link, Form} from "react-router-dom";
import editButton from "../../../src/images/edit-button.svg"
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dropdownArrow from "../../../src/images/dropdown-arrow.svg";

export default function ReservationCard({reservation, viewing}) {
    const [cat, setCat] = useState({})
    const [drink, setDrink] = useState({})
    const [room, setRoom] = useState({})
    const [isEditing, setIsEditing] = useState(false)
    const [size, setSize] = useState("")
    const [date, setDate] = useState("");
    const currentDate = (date) => new Date() < date;
    console.log(reservation, "reservation card")
    console.log(cat, "cat")

    async function getCat(cat) {
        let result = await fetch(`https://cat-cafe-010s.onrender.com/cats/${cat}`)
        return result.json()
    }

    async function getDrink(drink) {
        let result = await fetch(`https://cat-cafe-010s.onrender.com/drinks/${drink}`)
        return result.json()
    }

    async function getRoom(room) {
        let result = await fetch(`https://cat-cafe-010s.onrender.com/rooms/${room}`)
        return result.json()
    }

    useEffect(() => {
        getCat(reservation.cat_id).then((response) => setCat(response.data))
    }, []);
        
    useEffect(() => {
        getDrink(reservation.drink_id).then((response) => setDrink(response.data))
        }, []);

    useEffect(() => {
        getRoom(reservation.room_id).then((response) => setRoom(response.data))
         }, []);

    return (
        <>
            <div className="reservation-card">
                <div> 
                    <Form className="reservation-line" method="delete" action="/reservations">
                        <input type="number" name="reservation_id" value={reservation.id} style={{display: "none"}}/>
                        <p>{"Reservation " + reservation.id}</p>
                        {isEditing ? (<button className="delete-button" name="intent" value="delete">Delete</button>) : 
                        viewing ? (<a href="/reservations" className="back-button">Go Back</a>) :
                        (<a href={"/reservations/" + reservation.id} className="view-reservation">View Reservation</a>)}
                    </Form>
                    {isEditing ? 
                    (
                        <Form className="reservation-form">
                            <div className="selectors">
                                    <input type="text" placeholder={reservation.name} required />
                                    <input type="email" placeholder={reservation.email} required />
                                    <input type="tel" placeholder={reservation.phone_number} required />
                                    <input type="number" placeholder={reservation.num_of_people} min="1" max="15" value={size} onChange={(event) => {
                                        setSize(event.target.value || 1)
                                        if (event.target.value > 15) {
                                            setSize(15)
                                        }
                                        }} required />
                                <div className="dropdown-wrapper">
                                    <img src={dropdownArrow} className="dropdown-arrow" />
                                    <select id="choose-cat">
                                        <option disabled selected>{cat.name}</option>
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
                                        <option disabled selected>{drink.name}</option>
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
                                        <option disabled selected>{room.name}</option>
                                        <option value="Outer-Space">Outer-Space</option>
                                        <option value="Pirate-Ship">Pirate Ship</option>
                                        <option value="Boba-Heaven">Boba Heaven</option>
                                        <option value="High-Fantasy">High Fantasy</option>
                                        <option value="Witch's-Lair">Witch's Lair</option>
                                    </select>
                                </div>
                            </div>
                            <div className="selectors">
                            <div>
                                <DatePicker 
                                placeholderText= {dayjs(reservation.start_time).format('MMMM DD, YYYY | HH:mm')}
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
                                        <option disabled selected>{reservation.length_hours + " hours"}</option>
                                        <option value="30-min">30 minutes</option>
                                        <option value="1-hr">1 hour</option>
                                        <option value="1-hr-30-min">1 hour 30 minutes</option>
                                        <option value="2-hr">2 hours</option>
                                        <option value="2-hr-30-min">2 hours 30 minutes</option>
                                        <option value="3-hr">3 hours</option>
                                    </select>
                            </div>
                            </div>
                        </Form>
                    ) : 
                    (
                        <div className="reservation-wrapper">
                            <div className="personal-info"> 
                                <div className="reservation-line">
                                    <p>{"Name: " + reservation.name}</p>   
                                </div>
                                <div className="reservation-line">
                                    <p>{"Email: " + reservation.email}</p> 
                                </div>
                                <div className="reservation-line">
                                    <p>{"Phone number: " + reservation.phone_number}</p>
                                </div>
                                <div className="reservation-line">
                                    <p>{"Party size: " + reservation.num_of_people}</p>
                                </div>
                            </div> 
                            <hr />
                            <div className="reservation-specifics">
                                <div className="reservation-line">
                                    <p>{"Cat: " + cat.name}</p>
                                </div>
                                <div className="reservation-line">
                                    <p>{"Drink: " + drink.name}</p>
                                </div>
                                <div className="reservation-line">
                                    <p>{"Room: " + room.name}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="when-how-long">
                                <div className="reservation-line">
                                    <p>{"Start time: " + dayjs(reservation.start_time).format('MMMM DD, YYYY | HH:mm')}</p> 
                                </div>
                                <div className="reservation-line">
                                    <p>{"Length: " + reservation.length_hours + " hours"}</p> 
                                </div>
                            </div>
                            </div>
                    )}
                </div>
                <div className="editing-buttons">
                    {isEditing ? (
                        <button className="save-changes-button" onClick={() => setIsEditing(false)}>Save Changes</button>
                    ) : (
                        <img src={editButton} className="edit-button" onClick={() => setIsEditing(true)} />
                    )}
                </div>
            </div>
        </>
    )
}
