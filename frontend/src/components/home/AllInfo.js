import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import SideBar from '../layout/SideBar.js';
 
class AllInfo extends Component {
  constructor(props) {
      super(props);

        this.state = { 
          jsonObject: null,
          
        }
    };

    componentDidMount() {
        fetch('https://api.quarantine.country/api/v1/summary/latest')
          .then(response => response.json())
          .then( json => {this.setState({ jsonObject: json })})

    };


    render() {
        if(this.state.jsonObject!=null)  {
            return (
           

                <div >
                     <div className="row">
                        <div className="col-sm-3">
                        <SideBar/> 
                        </div>
                            <div className="col-sm-9 " id ="Covid_Info" >
                                <h2> Covid cases in World</h2> 
                                <ul>
                                 <li>Critical cases in World = {this.state.jsonObject.data.summary.critical}</li>
                                 <li>Active cases in World = {this.state.jsonObject.data.summary.active_cases}</li>
                                 <li>Aotal cases in World= {this.state.jsonObject.data.summary.total_cases}</li>
                                </ul>
                                <h4> Covid cases in Sweden</h4> 
                                <ul>
                                 <li>Critical cases in Sweden= {this.state.jsonObject.data.regions.sweden.critical}</li>
                                 <li>Active cases in Sweden = {this.state.jsonObject.data.regions.sweden.active_cases}</li>
                                 <li>Total cases in Sweden = {this.state.jsonObject.data.regions.sweden.total_cases}</li>
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

export default AllInfo;
