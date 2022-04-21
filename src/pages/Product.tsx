import '../styles/Index.css'
import {useState, useEffect} from 'react'
import {fetchProducts} from '../api'
import {Navbar, ProductCard} from '../components'
import {motion} from "framer-motion"
import {Products} from '../types'


export default function Product() {

  const [products, setProducts] = useState<Products[]>([])
  
  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])
  
  return (
    <>
      {products.length != 0 ? (
      
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

            {products.length &&
              products.map((p) => {
                return <ProductCard key={p.id} {...p} />
              })}

          </motion.div></>
      ):(null)}
    </>
  )
}
