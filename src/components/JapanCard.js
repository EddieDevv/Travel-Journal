import React from "react"
import { FaLocationArrow } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function JapanCard(props) {
    return (
        <div className="homecard--container">
            {/* <a href={props.dataElement.pageLink}> */}
                <div className="homecard">
                    <img
                        className="homecard--img"
                        src={props.dataElement.imageUrl}
                        alt=""
                    />
                    <div className="homecard--body">
                        <div className="homecard--location">
                            <IconContext.Provider value={{ style: {fontSize: 10.24, color: "#2B283A"}}}>
                                <FaLocationArrow />
                            </IconContext.Provider>
                            <h3>{props.dataElement.location}</h3>
                            <p><a href={props.dataElement.googleMapsUrl}>View on Google Maps</a></p>
                        </div>
                        <h1>{props.dataElement.title}</h1>
                        <h3>{props.dataElement.startDate} - {props.dataElement.endDate}</h3>
                        <p>{props.dataElement.description}</p>
                    </div>
                </div>
            {/* </a> */}
        </div>
        
    )
}