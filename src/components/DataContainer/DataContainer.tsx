import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import apiAxios from "../../config/axiosConfig";

export const DataContainer = () => {
    const [beers, setBeers] = useState('')
    const [hasError, setHasError] = useState(false);

    const getBeers = async () => {
        try {
            const data = await apiAxios.get('/');
            const jsonData = JSON.stringify(data, null, 2)
            setBeers(jsonData)
            console.log(data)
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
            <pre style={{textAlign:"left"}}>
            {beers}
            </pre>
            {/* <NivoResponsiveBar data={data} /> */}
        </Container>
    )
}
