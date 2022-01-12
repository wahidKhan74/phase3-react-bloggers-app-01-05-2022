import React, { Component } from "react";

export default class PostForm extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);        
    this.state = {
        id: "",
        title: "",
        body: "",
        author: "",
        category: "",
    };
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.post);
    if(this.props.post !=null && this.props.post !== prevProps.post) {
      this.setState(this.props.post);
    }
  }

  // Handle Change Event feilds
  handleChange = (event) => {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    // console.log(fieldName);
    // console.log( fieldValue);
    this.setState({ [fieldName] : fieldValue})
  };

  //render categories
  renderCategories() {
    return this.props.categories.map((category) => {
      return (
        <option key={category.code} value={category.code}>
          {category.name}
        </option>
      );
    });
  }

  // Event Handler
  handleFormSubmit = (event) => {
    // prevent default event submit
    event.preventDefault();
   // submit state with new post
   this.props.onNewPost(this.state);
    //clear fields aftyer submit
    this.setState({
      id: "",
      title: "",
      body: "",
      author: "",
      category: "",
    });
  }

  render() {
    return (
        <div className="col-sm-4">
           {/* <br/>  {this.renderFilter()} <br /><br/> */}
           <h3>Post Form</h3>
           <div className="card bg-light">
                <div className="card-body">
                    <form onSubmit={this.handleFormSubmit}> 
                      <div className="form-group">
                        <label htmlFor="title">Post Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter a title"  
                        name="title" value={this.state.title}
                        onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="text" className="form-control" id="body" placeholder="Enter a body"  
                        name="body" value={this.state.body}
                        onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Enter a author"
                        name="author" value={this.state.author}
                        onChange={this.handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Select Category</label>
                        <select className="form-control" id="category" name="category" 
                         category="author" value={this.state.category}
                         onChange={this.handleChange}>
                          <option>...</option>
                          {this.renderCategories()}
                        </select>
                      </div>
                      <button type='submit' className='btn btn-primary' >Save </button>
                    </form>
                </div>
           </div>
        </div>
    )
  }
}