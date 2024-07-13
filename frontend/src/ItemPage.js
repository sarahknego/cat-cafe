import React from "react";
import {useLoaderData, useParams, useLocation} from "react-router-dom"
import InfoPage from './Components/InfoPage';
import './ItemPage.css'

export default function ItemPage() {
    const data = useLoaderData()
    // console.log(data)
    return(
        <InfoPage props={data}/>
    )
}