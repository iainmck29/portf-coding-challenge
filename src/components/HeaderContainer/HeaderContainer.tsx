import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DateSelector } from "../DateSelector/DateSelector";
import { ABVFilter } from "../ABVFilter/ABVFilter";

export const HeaderContainer = () => {
    return (
        <Container className="d-flex pt-3 pb-3 border mt-5">
            <Row>
            <Col>
                <DateSelector />
            </Col>
            <Col>
                <ABVFilter />
            </Col>
            </Row>
        </Container>
    )
};