import '../styles/Index.css'
import {useState, useEffect} from 'react'
import {fetchWorks} from '../api'
import {Navbar, WorkCard} from '../components'
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
      
      <><div>
          <h1 className='mmText1'>
            MI MADRE
          </h1>

          <h2 className='mmText2'>
            WE CREATE, PRESENT, PERFORM...
          </h2>
        </div>
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
