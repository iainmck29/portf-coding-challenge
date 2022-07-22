import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import apiAxios from "../../config/axiosConfig";
import { useGetBeerData, sumBeers } from "../../config/hooks";
import { NivoResponsiveBar } from "../NivoResponsiveBar/NivoResponsiveBar";
import Spinner from 'react-bootstrap/Spinner';
import { formatDate } from "../helper"

interface DataContainerProps {
    startDate: Date,
    endDate: Date
}

export const DataContainer = ({startDate, endDate}: DataContainerProps) => {
    const formattedStart = formatDate(startDate)
    const formattedEnd = formatDate(endDate)

    console.log(formattedStart, formattedEnd)

    const {isLoading, error, beers} = useGetBeerData(formattedStart, formattedEnd);

    // useEffect(() => {
    //     console.log(beersSum);
    // })



    if (error) {
        return (
            <Container>
                <h1>Error loading data</h1>
            </Container>
        )
    }

    if (isLoading) {
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
    } else {
        return (
        <Container className="border mt-3" style={{height: "1000px"}}>
            {/* <pre style={{textAlign: "left"}}>{JSON.stringify(beers, null, 2)}</pre> */}
            <NivoResponsiveBar
            data={beers}
            />
        </Container>
    )
}
}
