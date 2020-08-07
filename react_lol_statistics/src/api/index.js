import axios from "axios";

import { DATA_DRAGON_API_URL, CHAMPION_SQUARE_ASSET } from "../constants/apiConstants"

export const fetchAllChampions = async () => {
    try {
        const { data: { data } } = await axios.get(`${DATA_DRAGON_API_URL}champion.json`);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createChampionImageUrl = imageName => {
    return `${CHAMPION_SQUARE_ASSET}${imageName}`;
}
