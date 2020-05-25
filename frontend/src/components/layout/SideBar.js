import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


function SideBar() {
   
        return (
            <div >
                <Container >
                    <Row >
                        <a href="/under3Years" className="btn btn-secondary btn-lg active" id="sidebarButton" role="button" aria-pressed="true" width="50">Students Under Age 3 years  </a>
                        <a href="/age3to6Years" className="btn btn-secondary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">Students Age 3-6 Years</a>
                        <a href="/age6to15Years" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">Students Age 6-15 Years </a>
                        <a href="/age15to21Years" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">Students Age 15-21 Years</a>
                        <a href="/InternationalStudents" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">International Students</a>
                    </Row>
                </Container>
            </div>         
        );
    }

export default SideBar;