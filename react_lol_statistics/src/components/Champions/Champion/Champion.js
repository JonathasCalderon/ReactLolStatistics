import React from "react";

import { createChampionImageUrl } from "../../../api";
import styles from "./Champion.module.css"

const Champion = ({ name, image, tags }) => {
    const imageUrl = createChampionImageUrl(image.full);
    const allTags = tags.join(" - ")

    return (
        <div>
            <img src={imageUrl} alt={name} className={styles.container} />
            <div className={styles.name} >{name}</div>
            <div>{allTags}</div>
        </div>
    )
}

export default Champion;