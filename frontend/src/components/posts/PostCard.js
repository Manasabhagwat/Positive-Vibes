import React from "react";
import CommentList from "../comments/CommentList";

function PostCard({post, onDeleteClick, onUpdateClick, comments}) {
    const [editPostbody, setBody] = React.useState("");
    //this.state.editPostbody = post.body;
    const handleSubmit = () => {
        // Invoke the passed in event callback
        onUpdateClick({body: editPostbody,id: post.id});

        // Clear the input field
        setBody("");
    };
    return (
        <div className="card-transparent">
            <div className="card-body">
                <h5>{post.heading}</h5>
                <p>{post.body}</p>
                

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={"#collapse"+post.id} aria-expanded="false" aria-controls={"#collapse"+post.id}>
                     Edit                       
                </button>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={"#collapseComments"+post.id} aria-expanded="false" aria-controls={"#collapse"+post.id}>
                            Comment                       
                            </button>
                <div class="collapse" id={"collapse"+post.id}>
                    <div>
                        <div className="form-group">
                            <textarea value={editPostbody}
                            onChange={e => setBody(e.target.value)} />
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
                <div className="collapse" id={"collapseComments"+post.id}>
                <div className="comment-body">
                            <CommentList post={post} />
                            </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;