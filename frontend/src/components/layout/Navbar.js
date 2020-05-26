import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.jpg"; 
import { Container, Row, Col, Spinner } from 'react-bootstrap';


function Navbar() {
    return (
        <div>
           
           <Container id = "margin" >
               
               <Row >
                         < Col  >
                        <img src={logo}  className ="header-img" />
                         </Col >   
                         <Col className ="header-name text-white" >
                             <h1>  POSITIVE VIBES   </h1>
                         </Col> 
                         <Col></Col>      
               </Row> 
             </Container>
     
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="dropdown show">
                    <button class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Positive Vibes
                    </button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="/under3Years">Students Under Age 3 Years</a>
                        <a class="dropdown-item" href="/age3to6Years">Students Age 3-6 Years</a>
                        <a class="dropdown-item" href="/age6to15Years">Students Age-15 Years</a>
                        <a class="dropdown-item" href="/age15to21Years">Students Age 15-21 Years</a>
                        <a class="dropdown-item" href="/InternationalSt">University Students</a>
                    </div>
                    </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <span class= "fa fa-home fa-lg"></span> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/otherInformation" className="nav-link">
                            <span class="fa fa-info-circle fas-lg"></span> Other Information
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link">
                            <span class="fa fa-address-card fas-lg"></span> About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/AllInfo" className="nav-link">
                            <span class="fa fa-bar-chart"></span> COVID-19 Cases
                            </Link>
                        </li>
                    </ul>
               
                </div>
                <form class="form-inline" target="_blank" action="https://www.google.com/search" method="GET">
                    <input class="form-control mr-sm-2" type="search" name="q" placeholder="Google Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
            </nav>
            
        </div>

    );

}

export default Navbar;