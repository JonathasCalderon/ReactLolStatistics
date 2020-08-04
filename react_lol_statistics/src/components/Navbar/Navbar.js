import React from "react";
import styles from "./Navbar.module.css";

const Navbar = props => {
    const {header, menuList} = styles;

    return (
        <header className={`${header}`}>
            <img />
            <ul className={`${menuList}`}>
                <li>Campeones</li>
                <li>Elos</li>
            </ul>
        </header>
    )
}

export default Navbar;