import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../assets/img/lolLogo.png";

const Navbar = () => {
    const { header,
        menuList,
        image,
        menuItem } = styles;

    return (
        <header className={`navbar ${header}`}>
            <Link to="/">
                <img src={logo} alt="logo" className={`${image}`} />
            </Link>
            <ul className={`${menuList}`}>
                <li>

                </li>
                <li className={`${menuItem}`}>
                    <Link to="/champions">Campeones</Link>
                </li>
                <li className={`${menuItem}`}>
                    <Link to="/elos">Elos</Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;