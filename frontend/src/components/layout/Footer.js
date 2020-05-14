import React from "react";

import { Container, Row, Col, Spinner } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Container id="margin1">

                <Row>
                    <Col>
                        <p>covid-info<br />1177</p>
                    </Col>
                    <Col>
                        <p>Emergency Number<br />112</p>
                    </Col>
                    <Col>
                        <p>Medical Advice Number<br />11414</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Footer;