import React from "react";
import logo from "./Logo.jpg";

function PostForm({onSubmit}) {
    const [heading, setHeading] = React.useState("");
    const [body, setBody] = React.useState("");
    

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({heading:heading, body:body});
       

        // Clear the input field
        setHeading("");
        setBody("");
        
    };

    return (
        <div className= "jumbotron background-image">
        <div className="card">
            <div className="card-body">
                <h4 class="card-header">Give a heading for your disscusion</h4>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            value={heading}
                            onChange={e => setHeading(e.target.value)} />
                    </div>
                <h5 className="card-title" >What is your positve experience with COVID-19?</h5>
                    <div>
                        <div className="form-group">
                            <textarea 
                                className="form-control"
                                value={body}
                                onChange={e => setBody(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button 
                            className="btn btn-primary" 
                            onClick={handleSubmit}>
                            Post
                        </button>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default PostForm;