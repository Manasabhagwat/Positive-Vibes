import React, { Component } from "react";
import SideBar from '../layout/SideBar.js';

class OtherInformation extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <SideBar />
                    </div>
                    <div className="col-xs-12 col-md-9" id="Covid_Info" >
                        <h2> Stuck at Home?</h2>
                        <p>A quarter of the world’s humans are at home right now. If you’re reading this, chances are you’re one of them. Yes, it’s important to stay safe indoors to protect ourselves and others – but that doesn’t mean we can’t have a good time.<br></br> our mission to bring you the best culture, entertainment, food and fun from around the world hasn’t changed.</p>
                       
                        <h4>More things to do in quarantine</h4>
                        <h5>Culture</h5>
                        <p>Explore the architecture and history of Rome, walking around a 3D digital model of the ancient city, with this <a href='https://www.futurelearn.com/courses/rome?utm_source=fl_blog&utm_medium=organic&utm_campaign=covid_content'>free online course.</a></p>
                        <p>If you prefer Botticelli to Pollock, you can <a href='https://artsandculture.google.com/partner/uffizi-gallery?hl=en'>tour the Uffizi</a> in Florence, arguably one of the best collections of Renaissance art in the world.</p>
                        <p> These 12 Famous Museums Offer Virtual Tours .<a href='https://www.travelandleisure.com/attractions/museums-galleries/museums-with-virtual-tours'>click-here for Virtual Tour</a> </p>
                        <p> <a href='https://www.naturespath.com/en-ca/blog/15-activities-kids-learn-different-cultures/'>15 Activities</a> for kids to learn about different cultures. </p>
                        <p>If you’re still looking for more galleries or museums to visit,<a href='https://artsandculture.google.com/partner?hl=en'>Google’s arts and culture collection</a> has virtual tours of 500 top attractions around the world, including national galleries from around the world, individual artist museums, and even the Eiffel Tower. </p>
                        <h5>Free Courses</h5>
                        <p>We can utilise quarantine to acquire <a href='https://www.pcmag.com/news/quarantine-and-learn-free-online-classes-you-can-take-now'>new skills</a> or learn long pending course in our wish list or update ourselves on <a href='https://www.edx.org/'>latest Technology.</a></p>
                        <h5>Time to relax</h5>
                        <p>After all We  need some pampering . you can watch movies by <a href='http://www.openculture.com/freemoviesonline'>clicking here</a> and relax and enjoy your me time.</p>
                        <p>Without <a href='https://www.grammy.com/grammys/news/watch-list-livestreaming-concerts-coronavirus-quarantine'>music</a>, life would be a mistake. Here is the details of online concerts around the globe</p>
                        <p><a href='https://www.udemy.com/topic/cooking/free/'>Cooking </a>is about creating something delicious for someone else</p>
                    </div>
                </div>
            </div>




        );
    }

}
export default OtherInformation;