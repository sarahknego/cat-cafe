import React from "react";
import {useLoaderData} from "react-router-dom";
import InfoPage from './Components/InfoPage';
import './ItemPage.css';

export default function ItemPage() {
    const data = useLoaderData();
    return(
        <InfoPage props={data}/>
    )
};