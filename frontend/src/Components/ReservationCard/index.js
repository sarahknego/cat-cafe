import React from "react";
import "./styles.css";
import {Form} from "react-router-dom";
import editButton from "../../../src/images/edit-button.svg";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dropdownArrow from "../../../src/images/dropdown-arrow.svg";

export default function ReservationCard({reservation, viewing, status}) {
    const [cat, setCat] = useState({})
    const [drink, setDrink] = useState({})
    const [room, setRoom] = useState({})
    const [isEditing, setIsEditing] = useState(false)
    const [date, setDate] = useState("");


    useEffect(() => {
        if (status === 200) {
            setIsEditing(false)
            status = null
        }
         }, [status]);

    const [formData, setFormData] = useState(reservation)


    const currentDate = (date) => new Date() < date;

    async function getCat(cat) {
        let result = await fetch(`https://cat-cafe-010s.onrender.com/cats/${formData.cat_id}`)
        return result.json()
    }

    async function getDrink(drink) {
        let result = await fetch(`https://cat-cafe-010s.onrender.com/drinks/${formData.drink_id}`)
        return result.json()
    }

    async function getRoom(room) {
        let result = await fetch(`https://cat-cafe-010s.onrender.com/rooms/${formData.room_id}`)
        return result.json()
    }

    useEffect(() => {
        getCat(reservation.cat_id).then((response) => setCat(response.data))
    }, [formData]);
        
    useEffect(() => {
        getDrink(reservation.drink_id).then((response) => setDrink(response.data))
        }, [formData]);

    useEffect(() => {
        getRoom(reservation.room_id).then((response) => setRoom(response.data))
         }, [formData]);

    return (
        <>
            <div className="reservation-card">
                <div> 
                    <Form className="reservation-line" method="delete" action="/reservations">
                        <input type="number" name="reservation_id" defaultValue={reservation.id} style={{display: "none"}}/>
                        <p>{"Reservation " + reservation.id}</p>
                        {isEditing ? (<button className="delete-button" name="intent" value="delete">Delete</button>) : 
                        viewing ? (<a href="/reservations" className="back-button">Go Back</a>) :
                        (<a href={"/reservations/" + reservation.id} className="view-reservation">View Reservation</a>)}
                    </Form>
                    {isEditing ? 
                    (
                        <Form className="reservation-form" action="/reservations" method="put">
                             <input type="number" name="reservation_id" defaultValue={reservation.id} style={{display: "none"}}/>
                             <input name="formData" type="hidden" value={JSON.stringify(formData)} />
                            <div className="selectors">
                                    <input type="text" name="name" placeholder={formData.name} value={formData.name}
                                    onChange={(event)=>{
                                       setFormData({...formData, "name": event.target.value}) 
                                    }} required />
                                    <input type="email" name="email" placeholder={formData.email} value={formData.email} onChange={(event)=>{
                                        setFormData({...formData, "email": event.target.value})
                                    }} required />
                                    <input type="tel" name="phone_number" placeholder={formData.phone_number} value={formData.phone_number} onChange={(event)=>{
                                        setFormData({...formData, "phone_number": event.target.value})
                                    }} required />
                                    <input type="number" name="num_of_people" placeholder={formData.num_of_people} min="1" max="15" value={formData.num_of_people} onChange={(event) => {
                                        setFormData({...formData, "num_of_people": event.target.value || 1})
                                        if (event.target.value > 15) {
                                            setFormData({...formData, "num_of_people": 15})
                                        }
                                        }} required />
                                <div className="dropdown-wrapper">
                                    <img src={dropdownArrow} className="dropdown-arrow" />
                                    <select id="choose-cat" name="cat_id" value={formData.cat_id} onChange={(event)=>{
                                        setFormData({...formData, "cat_id": event.target.value})
                                    }}>
                                        <option disabled defaultValue={cat.name}>{cat.name}</option>
                                        <option value="1">Charlie</option>
                                        <option value="2">Lola</option>
                                        <option value="3">Nina</option>
                                        <option value="4">Louis</option>
                                        <option value="5">Archibald</option>
                                        <option value="6">Blue</option>
                                        <option value="7">Socks</option>
                                    </select>
                                </div>
                                <div className="dropdown-wrapper">
                                <img src={dropdownArrow} className="dropdown-arrow" />
                                    <select id="choose-drink" name="drink_id" value={formData.drink_id} onChange={(event)=>{
                                        setFormData({...formData, "drink_id": event.target.value})
                                    }}>
                                        <option disabled defaultValue={drink.name}>{drink.name}</option>
                                        <option value="1">Bubblegum Boba</option>
                                        <option value="2">Rose Latte</option>
                                        <option value="3">Iced Chai Latte</option>
                                        <option value="4">Blended Galaxy Frappe</option>
                                        <option value="5">Espresso Shots</option>
                                        <option value="6">Unicorn Milkshake</option>
                                        <option value="7">Iced Pink Matcha Latte</option>
                                        <option value="8">Pink Lemonade</option>
                                        <option value="9">Unicorn Smoothie</option>
                                    </select>
                                </div>
                                <div className="dropdown-wrapper">
                                <img src={dropdownArrow} className="dropdown-arrow" />
                                    <select id="choose-room" name="room_id" value={formData.room_id} onChange={(event)=>{
                                        setFormData({...formData, "room_id": event.target.value})
                                    }}>
                                        <option disabled defaultValue={room.name}>{room.name}</option>
                                        <option value="1">Outer-Space</option>
                                        <option value="2">Pirate Ship</option>
                                        <option value="3">Boba Heaven</option>
                                        <option value="4">High Fantasy</option>
                                        <option value="5">Witch's Lair</option>
                                    </select>
                                </div>
                                <div className="res-date date-picker-wrapper">
                                    <DatePicker 
                                    placeholderText= {dayjs(reservation.start_time).format('MMMM DD, YYYY | HH:mm')}
                                    className="date-picker"
                                    showTimeSelect
                                    name="start_time"
                                    filterDate={currentDate}
                                    minTime={new Date(0, 0, 0, 8, 0)}
                                    maxTime={new Date(0, 0, 0, 18, 0)}
                                    selected={date} 
                                    onChange={(date) => {
                                        setDate(date)
                                        setFormData({...formData, "start_time": date})
                                    }}
                                    onClick={(event) => console.log(event.target.value)}
                                    dateFormat="MMMM d, yyyy   |   h:mmaa" />
                                </div>
                                <div className="dropdown-wrapper res-length">
                                    <img src={dropdownArrow} className="dropdown-arrow" />
                                        <select id="stay-length" name="length_hours" value={formData.length_hours} onChange={(event)=>{
                                            setFormData({...formData, "length_hours": event.target.value})
                                        }}>
                                            <option disabled defaultValue={formData.length_hours}>{formData.length_hours + " hours"}</option>
                                            <option value=".5">30 minutes</option>
                                            <option value="1">1 hour</option>
                                            <option value="1.5">1 hour 30 minutes</option>
                                            <option value="2">2 hours</option>
                                            <option value="2.5">2 hours 30 minutes</option>
                                            <option value="3">3 hours</option>
                                        </select>
                                </div>
                            </div>
                            <div className="editing-buttons">
                                <button className="save-changes-button" type="submit" name="intent" value="edit"
                            
                                 >Save Changes</button>
                            </div>
                        </Form>
                    ) : 
                    (
                        <div className="reservation-wrapper">
                            <div className="personal-info"> 
                                <div className="reservation-line">
                                    <p>{"Name: " + formData.name}</p>   
                                </div>
                                <div className="reservation-line">
                                    <p>{"Email: " + formData.email}</p> 
                                </div>
                                <div className="reservation-line">
                                    <p>{"Phone number: " + formData.phone_number}</p>
                                </div>
                                <div className="reservation-line">
                                    <p>{"Party size: " + formData.num_of_people}</p>
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
                                    <p>{"Start time: " + dayjs(formData.start_time).format('MMMM DD, YYYY | HH:mm')}</p> 
                                </div>
                                <div className="reservation-line">
                                    <p>{"Length: " + formData.length_hours + " hours"}</p> 
                                </div>
                            </div>
                            <div className="editing-buttons">
                            <img src={editButton} className="edit-button" onClick={() => setIsEditing(true)} />
                            </div>
                            </div>
                    )}
                </div>
            </div>
        </>
    )
};
