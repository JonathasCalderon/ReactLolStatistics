import React from "react";

import styles from "./Navbar.module.css";
import logo from "../../assets/img/lolLogo.png"

const Navbar = props => {
    const { header, 
            menuList,
            image,
            menuItem} = styles;

    return (
        <header className={`${header}`}>
            <img src={logo} alt="logo" className={`${image}`}/>
            <ul className={`${menuList}`}>
                <li className={`${menuItem}`}>Campeones</li>
                <li className={`${menuItem}`}>Elos</li>
            </ul>
        </header>
    )
}

export default Navbar;