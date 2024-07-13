import {useLoaderData, useActionData, Link} from "react-router-dom";
import ReservationCard from "./Components/ReservationCard";
import "./Reservations.css";

export default function Reservations({editingCard}) {
    const data = useLoaderData();
    const status = useActionData();
    data.data.sort((a, b) => a.id - b.id);
    console.log(status);
    return(
        <>
            <div className="reservations-page">
                <h1 className="reservations-page-title">Reservations</h1>
                <div className="reservations-cards-wrapper">
                    {data?.data.length ? <div className="reservations-cards-page" >
                    {data.data.map((item) => (
                        <ReservationCard reservation={item} key={item.id} status={status}/>
                    ))}
                    </div> : (<p>Loading reservations...</p>)};
                </div>
            </div>
        </>
    )
};