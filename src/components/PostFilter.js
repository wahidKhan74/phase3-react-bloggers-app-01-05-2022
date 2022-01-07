import React from "react";

export default function PostFilter(props) {
    return (
        <div>
          <h3> Select posts buy category</h3>
          <select className="form-control" onChange={props.eventObj.handleFilterCategoryChange}>
            <option>...</option>
            {props.eventObj.rederCategories()}
          </select>
        </div>
      );
}