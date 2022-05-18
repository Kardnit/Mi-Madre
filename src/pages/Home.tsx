import '../styles/Index.css'
import '../styles/Title.css'
import { useState, useEffect } from 'react'
import {Navbar, Title} from '../components'
import {motion} from "framer-motion"

export default function Home() {
  
  return (
    <>
      <Title></Title>
      
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.75, duration: 0.75}}>
      
      <Navbar />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore sint quod perspiciatis cum modi non temporibus debitis saepe aspernatur dolorum a expedita, molestiae aut laudantium harum excepturi voluptates distinctio.</p>
      
      </motion.div>
    </>
  )
}
