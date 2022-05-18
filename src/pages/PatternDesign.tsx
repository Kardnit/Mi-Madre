import '../styles/Index.css'
import {useState, useEffect} from 'react'
import {fetchPatternDesigns} from '../api'
import {Navbar, PatternDesignCard, Title} from '../components'
import {motion} from "framer-motion"
import {PatternDesigns} from '../types'


export default function PatternDesign() {

  const [patternDesigns, setPatternDesigns] = useState<PatternDesigns[]>([])
  
  useEffect(() => {
    fetchPatternDesigns().then(setPatternDesigns)
  }, [])
  
  return (
    <>
      {patternDesigns.length != 0 ? (
      
      <>

        <Title></Title>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}>

            <Navbar />

            {patternDesigns.length &&
              patternDesigns.map((p) => {
                return <PatternDesignCard key={p.id} {...p} />
              })}

          </motion.div></>
      ):(null)}
    </>
  )
}
