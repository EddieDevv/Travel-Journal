import React from "react"
import Home from "../pages/Home"
import Japan from "../pages/Japan"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/japan" element={<Japan />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes