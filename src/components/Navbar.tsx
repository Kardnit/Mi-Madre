import React, { Component } from 'react'
import {motion} from "framer-motion"
import '../styles/Navbar.css'
import {BarItems} from "./BarItems"
import {DarkMode} from "../components";

class Navbar extends Component {
    
    render() {
        return(
            <div>
            
            <nav className='NavbarItems'>
                
                <ul className='NavMenu'>
                    {BarItems.map((item,index) => {
                        return (
                            <div>
                                
                                <motion.li key={index}
                                whileHover={{
                                    scale: 1.5,
                                }}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                                </motion.li>

                            </div>
                            
                        )
                    })}

                    <div>
                    
                    <DarkMode />

                    </div>
                  

                </ul>

            </nav>
            </div>
        )
    }
}

export default Navbar