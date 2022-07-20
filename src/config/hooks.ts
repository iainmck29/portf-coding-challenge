import { useState, useEffect } from "react";
import apiAxios from "./axiosConfig";


export const useGetBeerData = (params?: string) => {
    const [beers, setBeers] = useState('')


    const getBeers = async () => {
        try {
            const data = await apiAxios.get(`/${params}`);
            const jsonData = JSON.stringify(data, null, 2)
            setBeers(jsonData)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        getBeers();
    }, [])

    return beers
} 