import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { DataProps } from "../HeaderContainer/HeaderContainer"

export const DateSelector = (props: DataProps) => {


    return (
        <Container className=" d-flex flex-column align-items-start">
            <Row>
            <h2>Select Date Range</h2>
            </Row>
            <Row className="d-flex">
                <Container className="d-flex">
                    <DatePicker 
                    selected={props.startDate}
                    onChange={(date: Date) => props.onChangeStart(date)} 
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    />
                    <div style={{ margin: "0px 20px"}}> - </div>
                    <DatePicker 
                    selected={props.endDate}
                    onChange={(date: Date) => props.onChangeEnd(date)} 
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    />
                </Container>
            </Row>
            <Row>
                <Container className="mt-3">
                <Button variant="primary">
                    View selected dates
                </Button>
                </Container>
            </Row>
        </Container>
    )
}