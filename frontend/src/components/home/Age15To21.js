import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
 
class Age15To21 extends Component {
    render() {
        return (
           

            <div>
                 <div className="row">
                    <div className="col-sm-3">
                        <Container >
                          <Row >
                          <Alert variant="success" className ="alertCol">
                                <Col ><Link to="/under3years">   Age Under 3 Years  </Link></Col>
                                </Alert>
                                
                                <Alert variant="success"  className="alertCol">   
                                <Col ><Link to="/age3to6Years">   Age 3 To 6 Years   </Link></Col>
                                </Alert>

                                <Alert variant="success" className="alertCol">   
                                <Col><Link to="age6to15Years">    Age 6 To 15 Years    </Link></Col>
                                    </Alert>

                                <Alert variant="success" className="alertCol">   
                                <Col ><Link to="/age15to21Years">   Age 15 To 21 Years   </Link></Col>
                                     </Alert>
                                    
                                <Alert variant="success" className="alertCol">   
                                <Col ><Link to="/InternationalStudents"> International Students</Link></Col>
                                </Alert>
                            </Row>
                        </Container>
                    </div>
                        <div className="col-sm-9" id ="Covid_Info" >
                           <div class="bigger" id="image4">
                                <div class="smaller"><h3>Age 15 To 21 Years</h3></div>
                             </div> 
                            <h2> heading here</h2> 
                                    <p> <b>content1 </b>
                                        <br />info here
                                    </p>  
                                    <div>
                                    <p>View comments or leave comments here in discussion forum</p>
                                    <button type="button" class="btn btn-info" href="#">Discussion Forum</button>
                                    </div>
                                
                         </div>  
                 </div>
                 
             </div>
           
         
           
        );
    }
}

export default Age15To21;