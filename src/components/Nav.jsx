import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import "../styles/Nav.css"

export default function Nav() {
    const globeIcon = <FontAwesomeIcon icon={faGlobeAsia} size="2xl"/>
    return (
        <nav className="nav">
            {globeIcon}
            <h3>my travel journal.</h3>
        </nav>
        
    )
}