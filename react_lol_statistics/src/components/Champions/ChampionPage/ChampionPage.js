import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchSingleChampion } from "../../../api"

const ChampionPage = () => {
    const { championId } = useParams();
    const [champion, setChampion] = useEffect({});

    useEffect(() => {
        const fetchApi = async () => {
            setChampion(await fetchSingleChampion());
        }

        fetchApi();
    }, [])

    return (
        <div>
            champion page!
        </div>
    )
}

export default ChampionPage;