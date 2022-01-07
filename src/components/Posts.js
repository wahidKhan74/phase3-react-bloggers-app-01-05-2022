import React from "react";
import PostDetails from "./PostDetails";
import PostFilter from "./PostFilter";
import PostForm from "./PostForm";

class Posts extends React.Component {
  // data
  constructor() {
    super();
    this.handleFilterCategoryChange = this.handleFilterCategoryChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);

    this.state = {
      categories: [
        { code: "react", name: "React" },
        { code: "redux", name: "Redux" },
        { code: "angular", name: "Angular" },
        { code: "jsx", name: "JSX" },
      ],
      post: { id: 0, title: "", body: "", author: "", category: "" },
      posts: [
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
        },
        {
          id: 4,
          title: "Introduction to JSX",
          body: "This post provides an introduction to JSX",
          author: "Jane",
          category: "jsx",
        },
      ],
      fillterPost: [],
      isFiltered: false,
    };
  }

  // Handle Category Change Event
  handleCategoryChange = (event) => {
    const post = this.state.post;
    this.setState({post :{...post, category: event.target.value}})
  };

  // Handle Title Change Event
  handleTitleChange = (event) => {
    const post = this.state.post;
    this.setState({post :{...post, title: event.target.value}})
  };

  // Handle Body Change Event
  handleBodyChange = (event) => {
    const post = this.state.post;
    this.setState({post :{...post, body: event.target.value}})
  };

  // Handle Author Change Event
  handleAuthorChange = (event) => {
    const post = this.state.post;
    this.setState({post :{...post, author: event.target.value}})
  };

  // handle filters
  handleFilterCategoryChange = (event) => {
    this.setState((preState) => {
      let fillterPost = preState.posts.filter((post) => {
        return post.category == event.target.value;
      });
      this.state.isFiltered = true;
      return { fillterPost: fillterPost };
    });
  };

  // Event Handler
  handleFormSubmit(event) {
    // prevent default event submit
    event.preventDefault();
    // console.log("post", this.state.post);
    this.setState((prevState)=>{
        const id = (prevState.posts.length ===0) ? 1 : prevState.posts[prevState.posts.length-1].id+1;
        // update id in the 
        const post = {...this.state.post, id:id};
        return { posts: [...prevState.posts, post]}
    })
  }
  // Render Categories
  rederCategories() {
    return this.state.categories.map((cat) => {
      return (
        <option key={cat.code} value={cat.code}>
          {cat.name}
        </option>
      );
    });
  }

  // posts rendering logic
  renderPosts() {
    if (!this.state.isFiltered) {
      this.state.fillterPost = this.state.posts;
    }
    return (
      <div className="col-sm-8">
        <h3>All about Posts</h3>
        {this.state.fillterPost.map((post) => (
          <PostDetails key={post.id} post={post} />
        ))}
      </div>
    );
  }

  // render Form
  renderForm() {
      return (
        <PostForm eventObj={this} />
    )
  }

  // post filter
  renderFilter() {
    return (
      <PostFilter eventObj={this} />
    );
  }
  // template
  render() {
    return ( <div className="row">
      {this.renderForm()}
      {this.renderPosts()}
    </div>);
  }
}

export default Posts;
