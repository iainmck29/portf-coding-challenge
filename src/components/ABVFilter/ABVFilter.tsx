import React from "react";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"

export const ABVFilter = () => {
    return (
        <Container className="d-flex flex-column align-items-start">
            <h2>Filter by ABV</h2>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter ABV e.g. 4.2" />
                </Form.Group>
            </Form>
            
        </Container>
    )
}