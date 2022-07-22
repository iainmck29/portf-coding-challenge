import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import styles from "./ABVFilter.module.css"


export const ABVFilter = (props: any) => {
    const [ABV, setABV] = useState(0.0)

    useEffect(() => {
        props.onChangeABV(ABV)
    }, [ABV])

    const handleChange = (e: any) => {
        setABV(e.target.value);
    }

    return (
        <Container className="d-flex flex-column align-items-start ms-0 ps-0">
            <h2 className="fs-4">Filter by ABV</h2>

            <Form>
                <Form.Group>
                    <Container className="d-flex flex-column align-items-start ms-0 ps-0">
                    <label>Select min ABV</label>
                    <Form.Control
                    type="text"
                    placeholder="Enter ABV e.g. 4.2"
                    defaultValue={ABV}
                    onChange={handleChange}
                    className={styles.abvInput}/>
                    </Container>
                </Form.Group>
            </Form>
            
        </Container>
    )
}