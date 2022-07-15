import React from "react"
import Header from "./components/Header"
// import SwedenData from "./data/swedenData"
// import SwitzerlandData from "./data/switzerlandData"
import AnimatedRoutes from "./components/AnimatedRoutes"

export default function App() {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <AnimatedRoutes />
            </div>
        </div>
    )
}