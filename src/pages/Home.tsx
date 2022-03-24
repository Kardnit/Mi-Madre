import '../styles/Index.css'
import { useState, useEffect } from 'react'
import {Navbar} from '../components'
import {motion} from "framer-motion"

export default function Home() {

  return (
    <div>
      <div>
        <h1 className='mmText1'>
        MI MADRE
        </h1>

        <h2 className='mmText2'>
        WE CREATE, PRESENT, PERFORM...
        </h2>
        </div>
      
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.75, duration: 0.75}}>
      
      <Navbar />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore sint quod perspiciatis cum modi non temporibus debitis saepe aspernatur dolorum a expedita, molestiae aut laudantium harum excepturi voluptates distinctio.</p>
      
      </motion.div>
    </div>
  )
}
