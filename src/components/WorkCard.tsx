import '../styles/WorkCard.css'
import { Works } from '../types'
import {motion} from "framer-motion"

export default function WorkCard(works: Works) {
  return (
    <motion.div whileHover={{
      scale: 1.05,
      }}className="work-card-container" style={{ backgroundImage: `url(${works.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <a href={`/Works/${works.name}`}>
        <div className="work-card">{works.name}</div>
      </a>
    </motion.div>
  )
}
