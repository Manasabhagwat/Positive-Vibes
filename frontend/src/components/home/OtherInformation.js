import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import SideBar from '../layout/SideBar.js';

class OtherInformation extends Component {
    render() {
        return (
            <div>
                <div className="row">
                   
                        <SideBar />
                   
                    <div className="col-xs-12 col-md-9" id="Covid_Info" >
                        <h2> Stuck at Home?</h2>
                        <p>A quarter of the world’s humans are at home right now. If you’re reading this, chances are you’re one of them. Yes, it’s important to stay safe indoors to protect ourselves and others – but that doesn’t mean we can’t have a good time.<br></br> our mission to bring you the best culture, entertainment, food and fun from around the world hasn’t changed.</p>
                       
                        <h4>Culture</h4>

                        <p>Explore the architecture and history of Rome, walking around a 3D digital model of the ancient city, with this <a href='https://www.futurelearn.com/courses/rome?utm_source=fl_blog&utm_medium=organic&utm_campaign=covid_content'>free online course.</a></p>
                        <p>If you prefer Botticelli to Pollock, you can <a href='https://artsandculture.google.com/partner/uffizi-gallery?hl=en'>tour the Uffizi</a> in Florence, arguably one of the best collections of Renaissance art in the world.</p>
                        <p> These 12 Famous Museums Offer Virtual Tours .<a href='https://www.travelandleisure.com/attractions/museums-galleries/museums-with-virtual-tours'>click-here for Virtual Tour</a> </p>
                        <p> <a href='https://www.naturespath.com/en-ca/blog/15-activities-kids-learn-different-cultures/'>15 Activities</a> for kids to learn about different cultures. </p>
                        <p>If you’re still looking for more galleries or museums to visit,<a href='https://artsandculture.google.com/partner?hl=en'>Google’s arts and culture collection</a> has virtual tours of 500 top attractions around the world, including national galleries from around the world, individual artist museums, and even the Eiffel Tower. </p>
                       
                        <h4>Fun activities</h4>
                        <p> <a href='https://familyeguide.com/boredom-busters-110-fun-at-home-activities-for-families-kids-2/'>Fun (and mostly free) activities </a>that you and your kids can enjoy at home.  This handy list can easily be printed and placed on the refrigerator – a great way to have instant “ideas” when boredom strikes!</p>
                        <p> 101 actually fun things to do at home.<a href='https://www.timeout.com/things-to-do/best-things-to-do-at-home-stuck-inside-bored'>click-here</a> </p>
                        
                    </div>
                </div>
            </div>




        );
    }

}
export default OtherInformation;