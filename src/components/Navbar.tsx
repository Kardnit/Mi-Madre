import React, { Component } from 'react'
import '../styles/Navbar.css'
import {BarItems} from "./BarItems"
import {motion} from "framer-motion"
import {DarkMode} from "../components";

class Navbar extends Component {
    
    render() {
        return(
            <div>
            
            <motion.div
            initial={{ scale: 5, paddingTop: 150}}
            animate={{ scale: 1, paddingTop: 0}}
            transition={{ delay: 1.5, duration: 1.5}}>
                <h1 className='mmText1'>
                MI MADRE
                </h1>

                <h2 className='mmText2'>
                WE CREATE, PRESENT, PERFORM...
                </h2>
            </motion.div>
            
            <nav className='NavbarItems'>
                
                <ul className='NavMenu'>
                    {BarItems.map((item,index) => {
                        return (
                            <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ delay: 3, duration: 3}}>
                                
                                <motion.li key={index}
                                whileHover={{
                                    scale: 1.5,
                                }}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                </motion.li>

                            </motion.div>
                            
                        )
                    })}

                    <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 3, duration: 3}}>
                    
                    <DarkMode />

                    </motion.div>
                  

                </ul>

            </nav>
            </div>
        )
    }
}

export default Navbar