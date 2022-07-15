import React from "react"
import JapanData from "../data/japanData"
import JapanCard from "../components/JapanCard"
import { motion } from "framer-motion"
import Delayed from "../components/Delayed.ts"

export default function Japan() {
    return (
    <Delayed>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: "100%"}}
            exit={{opacity: 0}}
        >
            {
                JapanData.map((dataElement, i) => (
                        <JapanCard
                            dataElement={dataElement}
                        />
                ))
            }
        </motion.div>
    </Delayed>
    )
}

// import { motion } from "framer-motion"

// function Home() {
//     return (
//         <motion.div 
//             initial={{width: 0}}
//             animate={{width: "100%"}}
//             exit={{width: 0}}
//         >
//             {Data.map((dataElement, i) => (
//             <HomeCard
//                 dataElement={dataElement}
//                 index={i}
//             />
//             ))}
//         </motion.div>
//     )
// }

// export default Home