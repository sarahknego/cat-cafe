import React from "react";
import {useLoaderData} from "react-router-dom";
import ReservationCard from './Components/ReservationCard';
import './ReservationPage.css';

export default function ReservationPage() {
    const data = useLoaderData();
    return(
        <div className="single-reservation-page">
            <ReservationCard reservation={data.data} viewing={true} />
        </div>
    )
};