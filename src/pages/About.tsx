import '../styles/About.css'
import { useState, useEffect } from 'react'
import {Navbar, Title} from '../components'
import {motion} from "framer-motion"

export default function About() {

  return (
    <div>
        <Title></Title>
      
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.75, duration: 0.75}}>
      
      <Navbar />  
      
      </motion.div>

      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.75, duration: 0.75}}>
      
      <p>Mi Madre was born by the creations that put together the perfect harmony of Europe’s artistic approach with the traditional Turkish culture craftsmanship. </p>

      <p>Mi Madre aims for manufacturing the experiences extracted from various disciplines in our time  where the visual communication is at the utmost </p>
      
      <p> intensity by blending the art-creation and crafting. The richness of the creation comes from the timeless designs coming to live by the combination of a variety of disciplines. </p>

      <p>Our objective is to bring a fresh touch to the international trends by mixing up a personal artistic approach with the power of the local.</p>

      <h1 className='figen'> Figen Iskender </h1>
      
      <h1> Owner & Designer </h1>

      <p>Interior Design and Style Consultant. I studied fashion design and interior design.</p>
      
      <p>I was born in Germany, lived in Istanbul and Amsterdam for long years. I still come and go between Netherlands and Turkey.</p>

      <p>I won many awards from various competitions and created Mi Madre to share my 27 years of experience in design industry.</p>

      <p>"We are walking this road to help you create your own style and carry it to you daily life.</p>

      <p>We built up a professional team to assist our customers dreams come true by using the architectural opportunities </p>

      <p>with a natural feeling of balance in colours and harmony of various forms that is constructing the space.</p>

      <p>We know that each individual is unique and therefore should be treated and reflected</p>

      <p>uniquely as they always existing there. We are trying to give this feeling by using a genuine and authentic approach for each individual we work for.</p>

      <p>We beware of repeating ourselves and we are sensitive on this issue. We value the integrity, comfort and authenticity of our projects instead</p>

      <p>of novelty which sometimes can create a lot of confusion and discomfort.</p>

      <p>Our ideal is to go to the basics and design intelligently to give the sense of being one and only."</p>

      </motion.div>
    
    </div>
  )
}
