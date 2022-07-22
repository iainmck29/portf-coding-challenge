import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DateSelector } from "../DateSelector/DateSelector";
import { ABVFilter } from "../ABVFilter/ABVFilter";


export interface DataProps {
    onChangeStart: (date: Date) => void,
    onChangeEnd: (date: Date) => void,
    startDate: Date,
    endDate: Date
}
export const HeaderContainer = (props: DataProps) => {
    return (
        <Container className="d-flex pt-3 pb-3 border mt-5">
            <Row>
            <Col>
                <DateSelector
                onChangeStart={props.onChangeStart}
                onChangeEnd={props.onChangeEnd}
                startDate={props.startDate}
                endDate={props.endDate}/>
            </Col>
            <Col>
                <ABVFilter />
            </Col>
            </Row>
        </Container>
    )
};