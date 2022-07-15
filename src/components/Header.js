import React from "react"
import { FaGlobeAmericas } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Header() {
    return (
        <div className="header">
            <IconContext.Provider value={{ style: {fontSize: 22, color: "white", marginRight: 5}}}>
                <FaGlobeAmericas />
            </IconContext.Provider>
            <h1>my travel journal.</h1>
        </div>
    )
}