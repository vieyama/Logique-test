import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
} from 'react-icons/ai'
export default function Footer() {
    return (
        <Container>
            <Row>
                <Col lg="12" md="12" sm="12" style={{ marginBottom: 50 }}>
                    <AiFillFacebook
                        style={{ fontSize: 35, margin: '10px 10px' }}
                    />
                    <AiFillTwitterSquare
                        style={{ fontSize: 35, margin: '10px 10px' }}
                    />
                    <AiFillInstagram
                        style={{ fontSize: 35, margin: '10px 10px' }}
                    />
                </Col>
            </Row>
        </Container>
    )
}
