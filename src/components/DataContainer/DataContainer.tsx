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
    endDate: Date,
    abv?: number
}

export const DataContainer = ({startDate, endDate, abv}: DataContainerProps) => {
    const formattedStart = formatDate(startDate)
    const formattedEnd = formatDate(endDate)
    const {isLoading, error, beers} = useGetBeerData(formattedStart, formattedEnd, abv);


    if (error) {
        return (
            <Container className="mt-5">
                <h1>Error loading data</h1>
            </Container>
        )
    }

    if (isLoading) {
        return (
        <Spinner animation="border" role="status" className="mt-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
    } else {
        return (
        <Container className="border mt-3 bg-light" style={{height: "1000px"}}>
            <NivoResponsiveBar
            data={beers}
            />
        </Container>
    )
}
}
