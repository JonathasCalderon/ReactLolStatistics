import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import { fetchSingleChampion, createChampionImageUrl } from "../../../api";
import styles from "./ChampionPage.module.css";

const ChampionPage = () => {
    const { championId } = useParams();
    const [champion, setChampion] = useState({});
    const championIsLoading = Object.keys(champion).length === 0;

    useEffect(() => {
        const fetchApi = async () => {
            const completeChampionObject = await fetchSingleChampion(championId);
            setChampion(completeChampionObject[championId]);
        }

        fetchApi();
    }, [])

    return (
        <div>
            {championIsLoading ?
                <div>
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </div> :
                <div className={styles.container}>
                    <img className={styles.img} src={createChampionImageUrl(championId)} alt={championId} />
                    <div className={styles.content}>
                        <h1>{champion.name}</h1>
                        <h5>{champion.title}</h5>
                        <p>{champion.lore}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ChampionPage;