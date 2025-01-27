import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import apiAxios from "./axiosConfig";


export const useGetBeerData = (startDate: string, endDate: string, abv?: number) => {
    const [beers, setBeers] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getBeers();
    }, [startDate, endDate, abv])

    const getBeers = async () => {
        try {
            //@ts-ignore
            let response = null, page = 1, results = [];
            do {
                let url = `?brewed_after=${startDate}&brewed_before=${endDate}`
                if (abv) {
                    url += `&abv_gt=${abv}`
                }
                url += `&per_page=80&page=${page++}`
                response = await apiAxios.get(url)
                //@ts-ignore
                results = results.concat(response.data)
            } while (response.data.length !== 0)
                //@ts-ignore
                const formattedBeers = sumBeers(results)
                setBeers(formattedBeers)
                setIsLoading(false)

        } catch (error) {
            setError(true)
            return
        }
    }

    useEffect(() => {
        getBeers()
    }, [])

    return {beers, isLoading, error}
};

export const sumBeers = (beers: any) => {
    const beersByDate = {};
    for (let i=0; i < beers.length; i++) {
        //@ts-ignore
        let date = beers[i]['first_brewed']
        //@ts-ignore
        beersByDate[date] = beersByDate[date] + 1 || 1
    }

    function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
      }

    const beersFormatted = Object.keys(beersByDate).map(firstBrewedDate => {
        if (hasKey(beersByDate, firstBrewedDate)) {
            return {
                brewDate: firstBrewedDate,
                sumBeers: beersByDate[firstBrewedDate]
            }

        }
        else return null
    })

        return beersFormatted;
    }





