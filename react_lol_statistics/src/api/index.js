import axios from "axios";

import {
    DATA_DRAGON_API_URL,
    CHAMPION_SQUARE_ASSET,
    SINGLE_CHAMPION_URL,
    CHAMPION_LOADING_IMAGE
} from "../constants/apiConstants"

export const fetchAllChampions = async () => {
    try {
        const { data: { data } } = await axios.get(`${DATA_DRAGON_API_URL}champion.json`);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createChampionSquareImageUrl = imageName => {
    return `${CHAMPION_SQUARE_ASSET}${imageName}`;
}

export const fetchSingleChampion = async championId => {
    try {
        const { data: { champion } } = await axios.get(`${SINGLE_CHAMPION_URL}${championId}.json`);
        return champion;
    } catch (error) {
        console.log(error);
    }
}

export const createChampionImageUrl = championName => {
    return `${CHAMPION_LOADING_IMAGE}${championName}_0.jpg`;
}
