import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import {Nav} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import PostsPage from "../posts/PostsPage";

 
class HomePage extends Component {
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
                                <Col><Link to="/age6to15Years">    Age 6 To 15 Years    </Link></Col>
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
                        <div className="col-xs-12 col-md-9" id ="Covid_Info" >
                            <h2> Covid -Information</h2> 
                                <p> <b>What is COVID-19? </b>
                                <p>COVID-19 is a disease caused by a new strain of coronavirus. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease. Formerly, this disease was referred to as ‘2019 novel coronavirus’ or ‘2019-nCoV.’
                                    The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold.
                                    </p></p>  
                                <p> <b> What are the symptoms of COVID-19? </b>
                                <p> Symptoms can include fever, cough and shortness of breath. In more severe cases, infection can cause pneumonia or breathing difficulties. More rarely, the disease can be fatal. These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. This is why testing is required to confirm if someone has COVID-19.
                                </p></p>
                                <p> <b>How does COVID-19 spread? </b>
                                   <p>  The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing). Individuals can also be infected from and touching surfaces contaminated with the virus and touching their face (e.g., eyes, nose, mouth). The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it.
                                   </p> </p>
                    
                                <p> <b>Who is most at risk? </b>
                                <p>  We are learning more about how COVID-19 affects people every day.  Older people, and people with chronic medical conditions, such as diabetes and heart disease, appear to be more at risk of developing severe symptoms.  As this is a new virus, we are still learning about how it affects children. We know it is possible for people of any age to be infected with the virus, but so far there are relatively few cases of COVID-19 reported among children. This is a new virus and we need to learn more about how it affects children. The virus can be fatal in rare cases, so far mainly among older people with pre-existing medical conditions.
                                </p> </p>
                            
                                <p> <b>What is the treatment for COVID-19? </b>
                               <p>  There is no currently available vaccine for COVID-19. However, many of the symptoms can be treated and getting early care from a healthcare provider can make the disease less dangerous. There are several clinical trials that are being conducted to evaluate potential therapeutics for COVID-19.
                               </p></p>  
                        </div>  
                 </div>  
             </div>

           
         
           
        );
    }
}

export default HomePage;