import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
 
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
                     <div className="row allInfo-padding">
                      
                            <div className="col-sm-6 " id ="Covid_Info">
                                <h4 > Covid Cases in World</h4> 
                                <div className="card-body colour">
                                <ul >
                                    <li>Total Cases = {this.state.jsonObject.data.summary.total_cases}</li>
                                    <li>Tested Cases = {this.state.jsonObject.data.summary.tested}</li>
                                    <li>Active Cases = {this.state.jsonObject.data.summary.active_cases}</li>
                                    <li>Recovered Cases = {this.state.jsonObject.data.summary.recovered}</li> 
                                    <li>Recovery_Ratio = {this.state.jsonObject.data.summary.recovery_ratio}</li> 
                                    <li>Critical Cases= {this.state.jsonObject.data.summary.critical}</li>
                                    <li>Death Cases = {this.state.jsonObject.data.summary.deaths}</li> 
                                    <li>Death_Ratio = {this.state.jsonObject.data.summary.death_ratio}</li>
                                </ul> 
                                </div>
                                </div>
                                <div className="col-sm-6" id ="Covid_Info">
                                <h4> Covid Cases in Sweden</h4> 
                                <div className="card-body colour">
                                <ul>
                                    <li>Total Cases = {this.state.jsonObject.data.regions.sweden.total_cases}</li>
                                    <li>Tested Cases = {this.state.jsonObject.data.regions.sweden.tested}</li>
                                    <li>Active Cases = {this.state.jsonObject.data.regions.sweden.active_cases}</li>
                                    <li>Recovered Cases = {this.state.jsonObject.data.regions.sweden.recovered}</li> 
                                    <li>Recovery_Ratio = {this.state.jsonObject.data.regions.sweden.recovery_ratio}</li> 
                                    <li>Critical Cases= {this.state.jsonObject.data.regions.sweden.critical}</li>
                                    <li>Death Cases = {this.state.jsonObject.data.regions.sweden.deaths}</li> 
                                    <li>Death_Ratio = {this.state.jsonObject.data.regions.sweden.death_ratio}</li>
                                </ul>
                                </div>
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
