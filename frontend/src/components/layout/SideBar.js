import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


function SideBar() {
   
        return (
            <div>
                 <Col className="col-12 col-md-2 mt-2">
                      <Col className=""> <a href="/under3Years" className="btn btn-secondary btn-lg active" id="sidebarButton" role="button" aria-pressed="true" width="50">Students Under Age 3 years  </a></Col> 
                      <Col>  <a href="/age3to6Years" className="btn btn-secondary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">Students Age 3-6 Years</a></Col> 
                      <Col><a href="/age6to15Years" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">Students Age 6-15 Years </a></Col> 
                      <Col><a href="/age15to21Years" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">Students Age 15-21 Years</a></Col> 
                      <Col> <a href="/InternationalSt" className="btn btn-primary btn-lg active" id="sidebarButton" role="button" aria-pressed="true">University Students</a></Col> 
                 </Col>
            </div>         
        );
    }

export default SideBar;