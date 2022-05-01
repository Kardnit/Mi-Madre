import '../styles/Panel.css'
import { useState, useEffect } from 'react'
import {Navbar, WorkTable} from '../components'
import {motion} from "framer-motion"

export default function Home() {

  return (
    <>
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
      <WorkTable/>
      </motion.div>
    </>
  )
}
