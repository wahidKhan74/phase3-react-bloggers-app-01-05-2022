import React from "react";

export default function PostForm(props) {
    return (
        <div className="col-sm-4">
           <br/>  {props.eventObj.renderFilter()} <br /><br/>
           <h3>Post Form</h3>
           <div className="card bg-light">
                <div className="card-body">
                    <form onSubmit={props.eventObj.handleFormSubmit}> 
                      <div className="form-group">
                        <label htmlFor="title">Post Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter a title" 
                        onChange={props.eventObj.handleTitleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="text" className="form-control" id="body" placeholder="Enter a body" 
                        onChange={props.eventObj.handleBodyChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Enter a author" 
                        onChange={props.eventObj.handleAuthorChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Select Category</label>
                        <select className="form-control" id="category" name="category"  value={props.eventObj.state.post.category}
                         onChange={props.eventObj.handleCategoryChange}>
                          <option>...</option>
                          {props.eventObj.rederCategories()}
                        </select>
                      </div>
                      <button type='submit' className='btn btn-primary' >Save </button>
                    </form>
                </div>
           </div>
        </div>
    )
}