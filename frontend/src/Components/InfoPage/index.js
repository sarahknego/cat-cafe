import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";

export default function InfoPage({props}) {
    console.log(props)
    return (
        <div className="info-page">
            <Link className="back-button" to={props.data.capacity ? "/rooms" : props.data.breed ? "/cats" : 
                    "/drinks"}>Back</Link>
            <div className="product">
                {console.log(props.data, "data")}
                <img className="product-photo" src={props.data.photo}/>
                <div className="product-info">
                    <h2 className="product-name">{props.data.name}</h2>
                    {props.data.breed ? (<div>
                        <p>Breed: {props.data.breed}</p>
                        <p>Age: {props.data.age}</p>
                        <p>Temperment: {props.data.temperment}</p>
                    </div>) : props.data.capacity ? (<div>
                        <p>Capacity: {props.data.capacity}</p>
                        <p className="product-description">{props.data.description}</p>
                    </div>) : 
                    (<div><p className="product-description">{props.data.description}</p></div>)}
                    <a href="/reserve" className="product-button">{props.data.capacity ? "Reserve this Room" : props.data.breed ? "Spend time with them" : 
                    "Order this drink"}</a>

                </div>
            </div>
        </div> 
    )
}