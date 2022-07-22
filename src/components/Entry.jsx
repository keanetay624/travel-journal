import React from "react"
import "../styles/Entry.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Entry(props) {
    const mapMarkerIcon = <FontAwesomeIcon icon={faMapMarkerAlt} size="l" className="red"/>
    return (
        <>
            <section className="entry">
                <img src={props.imgSrc} className="entry--img"/>
                <div className="entry--stats">
                    <div className="entry--country">
                        {mapMarkerIcon}
                        <h4>{props.country.toUpperCase()}</h4>
                        <a href={props.linkToMaps}>View on Google Maps</a>
                    </div>
                    <h2>{props.location}</h2>
                    <h4 className="entry--period">{props.period}</h4>
                    <p>{props.description}</p>
                </div>
            </section>
            <div className="divider"></div>
        </>
    );
}