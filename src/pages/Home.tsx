import '../styles/Index.css'
import { useState, useEffect } from 'react'
import {Navbar} from '../components'
import {motion} from "framer-motion"

export default function Home() {

  return (
    <div>
      <motion.div
            initial={{ scale: 5, paddingTop: 150}}
            animate={{ scale: 1, paddingTop: 0}}
            transition={{ delay: 2, duration: 2}}>
                <h1 className='mmText1'>
                MI MADRE
                </h1>

                <h2 className='mmText2'>
                WE CREATE, PRESENT, PERFORM...
                </h2>
        </motion.div>
      
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 3.5, duration: 3.5}}>
      
      <Navbar />
      
      </motion.div>
    </div>
  )
}
