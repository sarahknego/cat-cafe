import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Form} from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import dropdownArrow from "./images/dropdown-arrow.svg";
import "./Reserve.css";

export default function Reserve() {
    const [formData, setFormData] = useState({});
    const [date, setDate] = useState("");
    const currentDate = (date) => new Date() < date;
    return (
        <div className="reservation-page">
            <h1 className="make-reservation">Make a reservation</h1>
                <Form className="reservation-form" action="/reserve" method="post">
                             <input name="formData" type="hidden" value={JSON.stringify(formData)} />
                                <div className="about-you">
                                    <p>About you</p>
                                    <input type="text" name="name" placeholder="Name *" value={formData.name}
                                    onChange={(event)=>{
                                       setFormData({...formData, "name": event.target.value}) 
                                    }} required />
                                    <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={(event)=>{
                                        setFormData({...formData, "email": event.target.value})
                                    }} required />
                                    <input type="tel" name="phone_number" placeholder="Phone number *" value={formData.phone_number} onChange={(event)=>{
                                        setFormData({...formData, "phone_number": event.target.value})
                                    }} required />
                                    <input type="number" name="num_of_people" placeholder="Party size *" min="1" max="15" value={formData.num_of_people} onChange={(event) => {
                                        setFormData({...formData, "num_of_people": event.target.value || 1})
                                        if (event.target.value > 15) {
                                            setFormData({...formData, "num_of_people": 15})
                                        }
                                        }} required />
                                </div>
                                <div className="reserve-details">
                                    <p>What would you like to reserve?</p>
                                    <div className="selectors">
                                         <div className="dropdown-wrapper">
                                            <img src={dropdownArrow} className="dropdown-arrow" />
                                            <select id="choose-cat" name="cat_id" value={formData.cat_id} onChange={(event)=>{
                                             setFormData({...formData, "cat_id": event.target.value})
                                            }}>
                                                <option disabled selected>Choose your cat *</option>
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
                                                <option disabled selected>Choose your drink *</option>
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
                                                <option disabled selected>Choose your room *</option>
                                                <option value="1">Outer-Space</option>
                                                <option value="2">Pirate Ship</option>
                                                <option value="3">Boba Heaven</option>
                                                <option value="4">High Fantasy</option>
                                                <option value="5">Witch's Lair</option>
                                            </select>
                                         </div>
                                        </div>
                                    </div>
                                    <div className="reservation-time">
                                        <p>When would you like to stay with us?</p>
                                        <div className="selectors">
                                            <div className="res-date date-picker-wrapper">
                                                <DatePicker 
                                                placeholderText="When will you be joining us? *"
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
                                                        <option disabled selected>How long will you stay? *</option>
                                                        <option value=".5">30 minutes</option>
                                                        <option value="1">1 hour</option>
                                                        <option value="1.5">1 hour 30 minutes</option>
                                                        <option value="2">2 hours</option>
                                                        <option value="2.5">2 hours 30 minutes</option>
                                                        <option value="3">3 hours</option>
                                                    </select>
                                            </div>
                                    </div>
                            </div>
                        <input className="submit-button" type="submit" name="intent" value="Submit" />
                    </Form>
                    <a href="/reservations" className="to-reservations">See all reservations</a>
            </div>
    )
};
