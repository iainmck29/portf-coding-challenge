import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import apiAxios from "../../config/axiosConfig";

export const DataContainer = () => {
    const [beers, setBeers] = useState<AxiosResponse | null | void>(null)
    const [hasError, setHasError] = useState(false);

    const getBeers = async () => {
        try {
            const data = await apiAxios.get('/');
            setBeers(data);
            // console.log(data)
        } catch (error) {
            setHasError(true);
        }
    }

    useEffect(() => {
        getBeers();

    }, [])

    if (hasError) {
        return (
            <Container>
                <h1>Error loading data</h1>
            </Container>
        )
    }

    return (
        <Container>

        </Container>
    )
}
