import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export const DateSelector = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container className=" d-flex flex-column align-items-start">
            <Row>
            <h2>Select Date Range</h2>
            </Row>
            <Row className="d-flex">
                <Container className="d-flex">
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                    <div style={{ margin: "0px 20px"}}> - </div>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </Container>
            </Row>
        </Container>
    )
}