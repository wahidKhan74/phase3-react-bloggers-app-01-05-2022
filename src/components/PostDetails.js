import React from "react";

export default function PostDetails(props) {
    // console.log(props);
    return(
        <div className="card bg-light mb-3">
            <h5 className="card-header text-center">{props.post.title}</h5>
            <p className="card-title ml-5">{props.post.body}</p>
            <p className="card-text  ml-5">Author - {props.post.author}</p>
            <p className="card-text  ml-5">Category - {props.post.category}</p>
          </div>
    )
}