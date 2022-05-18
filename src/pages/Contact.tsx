import '../styles/Index.css'
import { useState, useEffect } from 'react'
import {Navbar, Title} from '../components'
import {motion} from "framer-motion"

export default function Contact() {

  return (
    <>
      <Title></Title>
      
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.75, duration: 0.75}}>
      
      <Navbar />
      
      </motion.div>
    </>
  )
}
