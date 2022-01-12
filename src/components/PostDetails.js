import React from "react";

export default function PostDetails(props) {
    // console.log(props);
    return(
        <div className="card bg-light mb-3">
            <h5 className="card-header text-center">{props.post.title}</h5>
            <p className="card-title ml-5">{props.post.body}</p>
            <p className="card-text  ml-5">Author - {props.post.author}</p>
            <p className="card-text  ml-5">Category - {props.post.category}</p>
            <p className="card-footer">
                <button className="btn btn-sm btn-outline-danger mr-3" onClick={() =>{ props.onDelete(props.post.id);}}>
                    Delete
                </button>
                <button className="btn btn-sm btn-outline-info" onClick={() =>{ props.onUpdate(props.post);}}>
                    Update
                </button>
            </p>
          </div>
    )
}