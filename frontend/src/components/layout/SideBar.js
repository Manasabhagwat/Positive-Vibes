import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function SideBar() {
   
        return (
            <div >

                        <Container >
                            <Row >
                            <Alert variant="success" className ="alertCol">
                                <Col ><Link to="/under3years">   Age Under 3 Years  </Link></Col>
                                </Alert>

                                <Alert variant="success"  className="alertCol">   
                                <Col ><Link to="/age3to6Years">   Age 3 To 6 Years   </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">   
                                <Col><Link to="/age6to15Years">    Age 6 To 15 Years    </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">   
                                <Col ><Link to="/age15to21Years">   Age 15 To 21 Years   </Link></Col>
                                 </Alert>
                                    
                                <Alert variant="success" className="alertCol">   
                                <Col ><Link to="/InternationalSt"> University Students</Link></Col>
                                </Alert>
                            </Row>
                        </Container>
                    </div>
                    
                    
        );
    }

export default SideBar;