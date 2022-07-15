import React from "react"
import Data from "../data/data"
import HomeCard from "../components/HomeCard"
import { motion } from "framer-motion"
import Delayed from "../components/Delayed.ts"

function Home() {
    return (
        <Delayed>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: "100%"}}
                exit={{opacity: 0}}
            >
                {Data.map((dataElement, i) => (
                <HomeCard
                    dataElement={dataElement}
                    index={i}
                />
                ))}
            </motion.div>
        </Delayed>
    )
}

export default Home