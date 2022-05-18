import React, { Component } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";
import { BarItems } from "./BarItems";
import { DarkMode, LoginButton, LogoutButton } from "../components";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavMenu">
        <ul className="NavbarItems">
          {BarItems.map((item, index) => {
            return (
              <motion.li key={index} whileHover={{ scale: 1.5 }}>
                <a className={item.cName} href={item.url}>
                  &nbsp; {item.title} &nbsp;
                </a>
              </motion.li>
            );
          })}

          <LogoutButton />
          <LoginButton />
          <DarkMode />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
