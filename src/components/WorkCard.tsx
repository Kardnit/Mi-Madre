import '../styles/WorkCard.css'
import { Works } from '../types'

export default function CategoryCard(works: Works) {
  return (
    <div className="work-card-container" style={{ backgroundImage: `url(${works.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <a href={`/work/${works.id}`}>
        <div className="work-card">{works.name}</div>
      </a>
    </div>
  )
}
