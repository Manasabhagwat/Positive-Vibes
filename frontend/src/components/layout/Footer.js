import React from "react";

import { Container, Row, Col, Spinner } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Container id="margin">

                    <Row>
                        <Col>
                        <span class= "fa fa-phone-square fa-lg text-white"></span><span className= "text-white"> covid-info<br />1177</span>
                        </Col>
                        <Col>
                        <span class= "fa fa-phone-square fa-lg text-white"></span><span  className= "text-white"> Emergency Number<br />112</span>
                        </Col>
                        <Col>
                        <span class= "fa fa-phone-square fa-lg text-white"></span><span className= "text-white"> Medical Advice Number<br />11414</span>
                        </Col>
               </Row>
       
        </Container>
        </div>
    );
}

export default Footer;
