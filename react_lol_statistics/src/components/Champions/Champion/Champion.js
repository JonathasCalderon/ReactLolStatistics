import React from "react";

import { createChampionImageUrl } from "../../../api";
import styles from "./Champion.module.css"

const Champion = ({ champion }) => {
    const { name, image, tags } = champion
    const imageUrl = createChampionImageUrl(image.full);
    const allTags = tags.join(" - ")
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt={name} className={styles.img} />
            <div className={styles.name} >{name}</div>
            <div className={styles.tags}>{allTags}</div>
        </div>
    )
}

export default Champion;