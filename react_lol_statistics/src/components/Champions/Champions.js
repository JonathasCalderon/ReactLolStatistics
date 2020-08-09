import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { fetchAllChampions } from "../../api";
import Champion from "./Champion/Champion";
import styles from "./Champions.module.css";

const Champions = () => {
    const [champions, setChampions] = useState({});
    const championsLoaded = Object.keys(champions).length > 0;
    console.log(Object.keys(champions).length > 0);

    useEffect(() => {
        const fetchAPI = async () => {
            setChampions(await fetchAllChampions());
        }

        fetchAPI();
    }, [])

    const renderChampions = () => {
        if (championsLoaded) {
            const renderedChampions = Object.keys(champions).map(champ => (
                <Champion key={champ} champion={champions[champ]} />
            )
            );
            return renderedChampions
        }
    }

    return (
        <div className={styles.container}>
            <h1>CHAMPIONS</h1>
            {
                !championsLoaded ?
                    <div>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    </div> :
                    <div className={styles.championsContainer}>
                        {renderChampions()}
                    </div>
            }
        </div>
    )
}

export default Champions;