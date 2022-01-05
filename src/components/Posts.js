import React from "react";

class Posts extends React.Component {
  // data
  constructor() {
    super();
    this.state = {
        categories:[
            { code: 'react', name: 'React' },
            { code: 'redux', name: 'Redux' },
            { code: 'angular', name: 'Angular' },
            { code: 'jsx', name: 'JSX' }
        ],
        posts : [
            {
              id: 1,
              title: "Introduction to React js",
              body: "This post provides an introduction to react",
              author: "Harry",
              category: "react",
            },
            {
              id: 2,
              title: "Advance to React js",
              body: "This post provides an advance to react features",
              author: "Marry",
              category: "react",
            },
            {
              id: 3,
              title: "Introduction to Redux",
              body: "This post provides an introduction to react",
              author: "Jane",
              category: "redux",
            },{
              id: 4,
              title: "Introduction to JSX",
              body: "This post provides an introduction to JSX",
              author: "Jane",
              category: "jsx",
            }
          ],
          fillterPost: [],
          isFiltered: false
    }
  }
  
  // Handle Category Change Event
  handleCategoryChange = (event) => {
    this.setState((preState)=>{
        let fillterPost = preState.posts.filter(post=>{
            return post.category == event.target.value;
        });
        this.state.isFiltered = true;
        return { fillterPost : fillterPost };
    })
  }

  // Render Categories
  rederCategories() { 
    return this.state.categories.map((cat )=>{
        return <option key={cat.code} value={cat.code}>{cat.name}</option>
    });
  }

  // posts rendering logic
  renderPosts() {
    if(!this.state.isFiltered) {
        this.state.fillterPost = this.state.posts;
    }
    return (
        <div className="col-sm-8">
            <h3>All about Posts</h3>
            {
                this.state.fillterPost.map((post)=>
                   <div className="card bg-light mb-3">
                       <h5 className="card-header text-center">{post.title}</h5>
                       <p className="card-title ml-5">{post.body}</p>
                       <p className="card-text  ml-5">Author - {post.author}</p>
                       <p className="card-text  ml-5">Category - {post.category}</p>
                   </div> 
                )
            }
        </div>
    )
  }

  // template
  render() {
      return (
          <div className="row">
              <di>
                  <select className="form-control" onChange={this.handleCategoryChange}>
                        <option>...</option>
                        {this.rederCategories()}
                  </select>
              </di>
              {this.renderPosts()}
          </div>
      )
  }
}

export default Posts;
