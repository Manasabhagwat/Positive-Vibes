import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function SideBar() {
   
        return (
            <div >
                 <div className="row">
                    <div className="col-sm-3">
                        <Container >
                            <Row >
                                <Alert variant="success" className="alertCol">
                                    <Col ><Link to="#">   Age Under 3 Years  </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">
                                    <Col ><Link to="#">   Age 3 To 6 Years   </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">
                                    <Col><Link to="#">    Age 6 To 15 Years    </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">
                                    <Col ><Link to="#">   Age 15 To 21 Years   </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">
                                    <Col ><Link to="#"> International Students</Link></Col>
                                </Alert>
                            </Row>
                        </Container>
                    </div>
                    </div>
                    </div>
        );
    }

export default SideBar;