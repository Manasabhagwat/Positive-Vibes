import React, { Component } from "react";
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
                       
                        <SideBar/> 
                      
                            <div className="col-sm-9 " id ="Covid_Info"  >
                                <h4 > Covid cases in World</h4> 
                                <div className="card-body" id="colour">
                                <ul >
                                <li>Recovered cases= {this.state.jsonObject.data.summary.recovered}</li> 
                                 <li>Active cases = {this.state.jsonObject.data.summary.active_cases}</li>
                                 <li>Total cases= {this.state.jsonObject.data.summary.total_cases}</li>
                                 <li>Critical cases= {this.state.jsonObject.data.summary.critical}</li>
                                 <li>Death_ratio = {this.state.jsonObject.data.summary.death_ratio}</li>
                                </ul> 
                                </div>
                                <h4> Covid cases in Sweden</h4> 
                                <div className="card-body" id="colour">
                                <ul>
                                <li>Recovered cases= {this.state.jsonObject.data.regions.sweden.recovered}</li>
                                 <li>Active cases  = {this.state.jsonObject.data.regions.sweden.active_cases}</li>
                                 <li>Total cases  = {this.state.jsonObject.data.regions.sweden.total_cases}</li>
                                 <li>Critical cases= {this.state.jsonObject.data.regions.sweden.critical}</li>
                                 <li>Death_ratio  {this.state.jsonObject.data.regions.sweden.death_ratio}</li>
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
