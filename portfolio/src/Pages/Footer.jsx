import React from 'react'
import { motion } from "framer-motion"

function Footer() {
  return (
    <div>
        <motion.div  initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:2}} className='bg-blue-950 text-white font-Mulish font-light p-10 flex justify-center items-center w-full'>
            <p>© Muhamed Jaseel CA 2025 Build With React and Tailwind Css</p>
        </motion.div>
    </div>
  )
}

export default Footer