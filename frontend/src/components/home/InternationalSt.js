import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';
 
class InternationalSt extends Component {
    render() {
        return (
           

            <div>
                 <div className="row">
                    <div className="col-sm-3">
                    <SideBar/> 
                    </div>
                        <div className="col-sm-9" id ="Covid_Info" >
                           <div className="bigger" id="image5">
                                <div className="smaller"><h3>International Students</h3></div>
                            </div> 
                            <h2> heading here</h2> 
                            <p> <b>content1 </b>
                                <br />info here
                            </p>  
                            <div>
                                <p>View comments or leave comments here in discussion forum</p>
                            </div>    
                        </div>  
                        <h3 className="disscusionForum">Disscusion Forum</h3> 
                             
                 </div>
                 <PostsPage category='internationalStudents'/>
                 
             </div>
           
         
           
        );
    }
}

export default InternationalSt;