import React from "react";
import "./styles.css";
import breedIcon from "../../../src/images/breed-icon.svg";
import moodIcon from "../../../src/images/mood-icon.svg";
import {Link} from "react-router-dom";

export default function CatCard({cat}) {
    return (
        <>
            <Link to={"/cats/" + cat.id} className="cat-card">
                <img src={cat.photo} className="cat-photo" />
                <div className="cat-info" >
                    <p className="cat-name">{cat.name}</p>
                    <div className="breed-info">
                        <img src={breedIcon}  className="breed-icon" />
                        <p className="cat-breed">{cat.breed}</p>
                    </div>
                    <div className="mood-info">
                        <img src={moodIcon} className="mood-icon" />
                        <p className="cat-mood">{cat.temperment}</p>
                    </div>
                </div>
            </Link>
        </>
    )
};
