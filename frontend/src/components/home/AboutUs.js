import React, { Component } from 'react';
import aboutUs from "./aboutUs.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import Shikha from "./Images/Shikha.png";
import Archana from "./Images/Archana.png";
import Veena from "./Images/Veena.png";
import Manasa from "./Images/Manasa.png";
import Vanitha from "./Images/Vanitha.png";
import SideBar from "../layout/SideBar.js";


class AboutUs extends Component {
    render() {
        return (
            <div >
                 <div className="row">
                 <div className="col-sm-3">
                     <SideBar/>                  
                    </div>

                    <div className="col-sm-9" id ="Covid_Info" >
                        <div class="bigger" id="about-image">
                                
                    
                </div>
              
                </div >
                    <div className="aboutus-Setting" >
                        <p> <b>
                            Look around you. In some way, right now, regardless of what happened 20 minutes ago or this morning or yesterday, you have a chance to shift your focus. Find something positive. Express gratitude for it. Thank it. Appreciate it. Love on it. Use it to lift your mood. Raise your frequency. Have fun with it.

                       <br /> It can be small.
                       <br /> It might be hard to find.
                       <br /> And you might feel It’d be insignificant to someone else…but that doesn’t matter because if it brings YOU joy, if it allows YOU to burn with a bright firey energy, then it is NOT insignificant.

                       <br /> Because when you are focused on your positive vibes, you’ll infect those around you with positive vibes.

                       <br /> What you focus on is what you create more of.

                       </b></p>
                    </div>

                    <Container className="aboutUs-Container">
                    <hr className="hrset" />
                        <Row> 
                            <Col md={{ span: 2, offset: 2 }}><img src={Archana} alt="avatar" class="avatar" /></Col>
                            <Col md={{ span: 6, offset: 0 }}>
                                <h4>Archana Gupta</h4>
                                <p><i>"You are braver than you believe and stronger than you seem,and smarter than you think"</i></p>
                            </Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 6, offset: 2 }}>
                                <h4>Manasa Bhagwat </h4>
                                <p><i>" Hang in there, as better times are ahead."</i></p>
                            </Col>
                            <Col md={{ span: 2, offset: 1 }}><img src={Manasa} alt="avatar" class="avatar" /></Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 2, offset: 2 }}><img src={Shikha} alt="avatar" class="avatar" /></Col>
                            <Col md={{ span: 6, offset: 0 }}>
                                <h4>Shikha Gupta</h4>
                            <p><i>"You ar confined only by THE WALLS you build yourself."</i></p>
                            </Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 6, offset: 2 }}>
                                <h4>Vanitha Krishnan</h4>
                                <p><i>"You never know how strong you are  ... until being strong is the only choice you have."</i></p>
                            </Col>
                            <Col md={{ span: 2, offset: 1 }}><img src={Vanitha} alt="avatar" class="avatar" /></Col>
                        </Row>
                        <hr className="hrset" />
                        <Row>
                            <Col md={{ span: 2, offset: 2 }}><img src={Veena} alt="avatar" class="avatar" /></Col>
                            <Col md={{ span: 6, offset: 0 }}>
                                <h4>Veenarani</h4>
                                <p><i>"We are shaped by our thoughts, we become what we think."</i></p>
                            </Col>
                            <hr className="hrset" />
                        </Row>
                    </Container>
                </div>

            </div>
       
        );
    }
}

export default AboutUs;