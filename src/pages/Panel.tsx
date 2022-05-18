import '../styles/Panel.css'
import { useState, useEffect } from 'react'
import {Navbar, Title, WorkTable} from '../components'
import {motion} from "framer-motion"
import { useAuth0 } from '@auth0/auth0-react';

export default function Panel() {

  const {isLoading, isAuthenticated} = useAuth0();

  if(!isAuthenticated && !isLoading){window.location.replace('/Home')}

  return (
    <>
      <Title></Title>
      
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
