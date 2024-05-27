import React from "react";
import "./styles.css";
import breedIcon from "../../breed-icon.svg";
import moodIcon from "../../mood-icon.svg";
import catPlaceholder from "../../cat-placeholder.svg"

export default function CatCard() {
    return (
        <>
            <div className="cat-card">
                <img src={catPlaceholder} className="cat-photo" />
                <div className="cat-info" >
                    <p className="cat-name">Henry</p>
                    <div className="breed-info">
                        <img src={breedIcon}  className="breed-icon" />
                        <p className="cat-breed">Good boye</p>
                    </div>
                    <div className="mood-info">
                        <img src={moodIcon} className="mood-icon" />
                        <p className="cat-mood">Chillin</p>
                    </div>
                </div>
            </div>
        </>
    )
}
