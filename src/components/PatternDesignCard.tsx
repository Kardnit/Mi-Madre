import '../styles/PatternDesignCard.css'
import {PatternDesigns} from '../types'
import {motion} from "framer-motion"

export default function PatternDesignCard(patternDesigns: PatternDesigns) {
  return (
    <motion.div whileHover={{
      scale: 1.05,
      }}className="pattern-design-card-container" style={{ backgroundImage: `url(${patternDesigns.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <a href={`/PatternDesigns/${patternDesigns.name}`}>
        <div className="pattern-design-card">{patternDesigns.name}</div>
      </a>
    </motion.div>
  )
}
