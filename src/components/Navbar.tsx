import React, { Component } from 'react'
import { BarItems } from "./BarItems"
import '../styles/Navbar.css'

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
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </nav>
            </div>
        )
    }
}

export default Navbar