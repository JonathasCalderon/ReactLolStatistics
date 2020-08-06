import React, { useEffect, useState } from "react";

import { fetchAllChampions } from "../../api"

const Champions = () => {
    const [champions, setChampions] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setChampions(await fetchAllChampions())
        }

        fetchAPI();
    }, [])

    return (
        <div>
        </div>
    )
}

export default Champions;