import React from "react";

function PostCard({post, onDeleteClick, onUpdateClick}) {
    const [editPostbody, setBody] = React.useState("");
    //this.state.editPostbody = post.body;
    const handleSubmit = () => {
        // Invoke the passed in event callback
        onUpdateClick({body: setBody});

        // Clear the input field
        setBody("");
    };
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                    {post.body}
                    {setBody}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={"#collapse"+post.id} aria-expanded="false" aria-controls={"#collapse"+post.id}>
                     Edit
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
            </div>
        </div>
    );
}

export default PostCard;