import '../styles/ProductCard.css'
import { Products} from '../types'
import {motion} from "framer-motion"

export default function ProductCard(products: Products) {
  return (
    <motion.div whileHover={{
      scale: 1.05,
      }}className="product-card-container" style={{ backgroundImage: `url(${products.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <a href={`/Products/${products.name}`}>
        <div className="product-card">{products.name}</div>
      </a>
    </motion.div>
  )
}
