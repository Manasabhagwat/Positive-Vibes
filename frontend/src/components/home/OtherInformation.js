import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
 
class OtherInformation extends Component {
  constructor(props) {
      super(props);

        this.state = { 
          jsonObject: null,
          
        }
    };

    componentDidMount() {
      // const API = 'https://api.quarantine.country/api/v1/summary/region?region=new_york';
      //  const DEFAULT_QUERY = 'redux';  
        fetch('https://api.quarantine.country/api/v1/summary/region?region=sweden')
          .then(response => response.json())
          .then( json => {this.setState({ jsonObject: json })})

    };


    render() {
        if(this.state.jsonObject!=null)  {
            return (
           

                <div>
                     <div className="row">
                        <div className="col-sm-3">
                            <Container >
                              <Row >
                                    
                                    <Alert variant="success"  className="alertCol">   
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
                            <div className="col-sm-9" id ="Covid_Info" >
                                <h2> Covid -Information</h2> 
                                <ul>
                                 <li>critical cases = {this.state.jsonObject.data.summary.critical}</li>
                                 <li>active cases = {this.state.jsonObject.data.summary.active_cases}</li>

                                 </ul>
                                    
                             </div>  
                     </div>
                     
                 </div>
               
             
               
            );
        }
        
        else {
            return(
                <></>
            )
        }

    }
}

export default OtherInformation;