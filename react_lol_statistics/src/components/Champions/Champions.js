import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { fetchAllChampions } from "../../api"
import Champion from "./Champion/Champion"

const Champions = () => {
    const [champions, setChampions] = useState({});
    const renderedChampions = [];
    const championsLoaded = Object.keys(champions).length > 0;

    useEffect(() => {
        const fetchAPI = async () => {
            setChampions(await fetchAllChampions());
        }

        fetchAPI();
    }, [])

    useEffect(() => {
        if (championsLoaded) {
            for (const champion in champions) {
                renderedChampions.push(
                    <Champion key={champion} champion={champions[champion]} />
                )
            }
            console.log(renderedChampions)
        }
    }, [champions])

    return (
        <div>
            <h1>CHAMPIONS</h1>
            {
                championsLoaded ?
                    <div>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                    </div> :
                    <div>
                        {renderedChampions}
                    </div>
            }
        </div>
    )
}

export default Champions;