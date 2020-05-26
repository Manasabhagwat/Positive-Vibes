import React from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SlackMethodApi from "../../api/SlackMethodApi";
import PostsApi from "./../../api/PostsApi";

class ContactUs extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            name:'',
            emailAddress:'',
            message:''
        };
        this.handleSubmit.bind(this);
    }

    async createSlackMessage(postData) {
        console.log("inside create slack message");
        try {
            await SlackMethodApi.createSlackMessage(postData);
            }
        catch (e) {
            console.error(e);
        }
    }

    handleSubmit = () => {
        console.log("inside handel submit");
        this.createSlackMessage({name:this.state.name, emailAddress:this.state.emailAddress, message:this.state.message});

        this.setState({name:''});
        this.setState({emailAddress:''});
        this.setState({message:''});
    };

render() {
    return (
        <div>
        <div className="card-body name">
            <label for="name">Name</label>

            <textarea 
                className="form-control col-sm-10"
                placeholder="Type your name here"
                value={this.state.name}
                onChange={e => this.setState({name:e.target.value})} />
        </div>

        <div className="card-body eamil">
        <label for="eamil">Email Address</label>

        <textarea 
            className="form-control col-sm-10"
            placeholder="Type your eamil address"
            value={this.state.emailAddress}
            onChange={e => this.setState({emailAddress:e.target.value})} />
        </div>

        <div className="card-body message">
        <label for="message">Message</label>

        <textarea 
            className="form-control col-sm-10"
            placeholder="Type your message here"
            value={this.state.message}
            onChange={e => this.setState({message:e.target.value})} />
        </div>

        <div>
        <div className="form-group row">
            <div className="offset-md-2">
                <button   
                    className="btn btn-outline-success" 
                    onClick={this.handleSubmit}>
                    Submit
                </button> 
            </div>
        </div>
        </div>
    </div>
    )
}


} 

export default ContactUs;