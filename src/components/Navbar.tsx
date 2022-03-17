import React, { Component } from 'react'
import '../styles/Navbar.css'
import {BarItems} from "./BarItems"
import {motion} from "framer-motion"
import {DarkMode} from "../components";

class Navbar extends Component {
    
    render() {
        return(
            <div>
            <span>
                <h1 className='mmText1'>MI MADRE</h1>
                <h2 className='mmText2'>WE CREATE, PRESENT, PERFORM...</h2>
            </span>
            
            <nav className='NavbarItems'>
                
                <ul className='NavMenu'>
                    {BarItems.map((item,index) => {
                        return (
                            <motion.div className='LoadMotion'
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ delay: 1.5, duration: 1.5}}>
                                
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

                    <DarkMode />

                </ul>

            </nav>
            </div>
        )
    }
}

export default Navbar