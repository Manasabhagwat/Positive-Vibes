import React from "react";
import logo from "./Logo.jpg";
import { Container, Row, Col, Spinner } from 'react-bootstrap';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heading:'',
            body:''
        };
        this.handleSubmit.bind(this);
    }


    handleSubmit = () => {
        // Invoke the passed in event callback
        this.props.onSubmit({heading:this.state.heading, body:this.state.body, category:this.props.category});
       

        // Clear the input field
        this.setState({heading:''});
        this.setState({body:''});
            

        };
        
    render() {
        return (
            <Row>
               <h4>What to share your positive experience? Type below and press post... </h4>
                <div className="card mt-3 ml-3 col-md-11">
                    <div className="card-body ">          
                            <div className="form-group row">
                                <label for="heading" class="col-sm-2 col-form-label">Heading</label>

                                <textarea 
                                        className="form-control col-sm-10"
                                        placeholder="Heading for your disscusion"
                                        value={this.state.heading}
                                        onChange={e => this.setState({heading:e.target.value})} />
                            </div>
                        <div className="form-group row">
                            <label for="disscusion" class="col-sm-2 col-form-label">Disscusion</label>
                                
                                    <textarea rows="10"
                                        className="form-control col-sm-10"
                                        placeholder="Share your positive experience regarding COVID-19"
                                        value={this.state.body}
                                        onChange={e => this.setState({body:e.target.value})} />
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-2">
                                <button 
                                    className="btn btn-outline-success" 
                                    onClick={this.handleSubmit}>
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
    
}

export default PostForm;