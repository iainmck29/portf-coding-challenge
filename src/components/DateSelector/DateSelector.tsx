import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { DataProps } from "../HeaderContainer/HeaderContainer"
import { useGetBeerData } from "../../config/hooks";

export const DateSelector = (props: DataProps) => {


    return (
        <Container className=" d-flex flex-column align-items-start">
            <Row>
            <h2 className="fs-4">Select Date Range</h2>
            </Row>
            <Row className="d-flex">
                <Container className="d-flex ms-0">
                    <Container className="d-flex flex-column align-items-start ms-0 ps-0">
                        <label>
                            Min date
                        </label>
                        <DatePicker 
                        selected={props.startDate}
                        onChange={(date: Date) => props.onChangeStart(date)} 
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        />
                    </Container>
                    <div style={{ margin: "25px 20px"}}> - </div>
                    <Container className="d-flex flex-column align-items-start">
                        <label>
                            Max date
                        </label>
                        <DatePicker 
                        selected={props.endDate}
                        onChange={(date: Date) => props.onChangeEnd(date)} 
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        />
                    </Container>
                </Container>
            </Row>
        </Container>
    )
}