import '../styles/Index.css'
import {useState, useEffect} from 'react'
import {fetchWorks} from '../api'
import {Navbar, Title, WorkCard} from '../components'
import {motion} from "framer-motion"
import {Works} from '../types'


export default function Work() {

  const [works, setWorks] = useState<Works[]>([])
  
  useEffect(() => {
    fetchWorks().then(setWorks)
  }, [])
  
  return (
    <>
      {works.length != 0 ? (
      
      <>

        <Title></Title>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}>

            <Navbar />

            {works.length &&
              works.map((w) => {
                return <WorkCard key={w.id} {...w} />
              })}

          </motion.div></>
      ):(null)}
    </>
  )
}
