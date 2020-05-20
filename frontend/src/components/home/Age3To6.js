import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import PostsPage from "../posts/PostsPage";
import SideBar from '../layout/SideBar.js';

class Age3To6 extends Component {
    render() {
        return (


            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-sm-9" id="Covid_Info" >
                        <div class="bigger" id="image2">
                            <div class="smaller"><h3>Age 3 To 6 Years</h3></div>
                        </div>
                        <h2>Activities for Age 3 To 6 Years</h2>
                        <p> Educational games for age 3 To 6 Years that will keep kids engaged and having fun. Topics include math, reading, typing, just-for-fun logic games… and more <a href='https://www.abcya.com/grades/k'>click-here</a></p>
                        <div>
                            <p>View comments or leave comments here in discussion forum</p>
                        </div>
                    </div>
                    <h3 className="disscusionForum">Disscusion Forum</h3>
                </div>
                <PostsPage category='3to6' />

            </div>



        );
    }
}

export default Age3To6;