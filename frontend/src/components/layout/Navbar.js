import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.jpg"; 
import { Container, Row, Col, Spinner } from 'react-bootstrap';



function Navbar() {
    return (
       <div>
           
           <Container id = "margin">
              <Row >
                        < Col>
                            <img src={logo}  className ="header-img" />
                        </Col>   
                        <Col id = "colsetting col-md-1">
                            <h1>Positive Vibes</h1>
                        </Col>    
                        <Col id = "headerLink">
                         <Link  style={{to:"#"}}>All Info about Covid-19</Link>
                        </Col>      
              </Row> 
            </Container>
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Positive Vibes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <span class= "fa fa-home fa-lg"></span>Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/otherInformation" className="nav-link">
                            <span class="fa fa-info-circle fas-lg"></span>Other Information
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contactUs" className="nav-link">
                            <span class="fa fa-address-card fas-lg"></span>Contact Us
                            </Link>
                        </li>
                </ul>
               
            </div>
        </nav>
       
       

</div>
    );
}

export default Navbar;