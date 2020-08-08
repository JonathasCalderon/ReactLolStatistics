import React from "react";
import { Link } from "react-router-dom";

import { createChampionImageUrl } from "../../../api";
import styles from "./Champion.module.css"

const Champion = ({ champion }) => {
    const { id, name, image, tags } = champion
    const imageUrl = createChampionImageUrl(image.full);
    const allTags = tags.join(" - ")
    return (
        <Link to={`/champion/${id}`}>
            <div className={styles.container}>
                <img src={imageUrl} alt={name} className={styles.img} />
                <div className={styles.name} >{name}</div>
                <div className={styles.tags}>{allTags}</div>
            </div>
        </Link>
    )
}

export default Champion;