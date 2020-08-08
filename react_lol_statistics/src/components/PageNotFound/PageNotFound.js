import React from "react";
import { Link } from "react-router-dom";

import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h4>Page Not Found!</h4>
            <Link to="/">
                <button className={styles.button} >Back to home</button>
            </Link>
        </div>
    )
}

export default PageNotFound;