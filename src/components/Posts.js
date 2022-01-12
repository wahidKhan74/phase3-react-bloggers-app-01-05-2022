import React from "react";
import PostDetails from "./PostDetails";
import PostFilter from "./PostFilter";
import PostForm from "./PostForm";

import {getPosts, addPosts, deletePosts, updatePosts} from '../services/posts-api';
import {getCategories} from '../services/categories-api';

class Posts extends React.Component {
  // data
  constructor() {
    super();
    this.handleFilterCategoryChange = this.handleFilterCategoryChange.bind(this);
    this.state = {
      categories: [],
      post: { id: 0, title: "", body: "", author: "", category: "" },
      posts: [ ],
      fillterPost: [],
      isFiltered: false,
    };
  }

   //component lifecycle methods
   componentDidMount() { 

    // load all post data
    getPosts().then((posts)=>{
      // console.log(posts);
      this.setState({ posts : posts});
    }).catch(error=>{
      console.log("Failed to load posts data.");
    });

    // load all categories data
    getCategories().then(categories=>{
      this.setState({ categories : categories});
    }).catch(error=>{
      console.log("Failed to load categories data.");
    });
   }

  
  // handle filters
  handleFilterCategoryChange = (event) => {
    this.setState((preState) => {
      let fillterPost = preState.posts.filter((post) => {
        return post.category === event.target.value;
      });
      this.state.isFiltered = true;
      return { fillterPost: fillterPost };
    });
  };

  // create post
  hadleNewPost = (post) => {
    delete post.id;
    addPosts(post).then(newPost=> {
     // console.log(newPost);
      this.setState((prevState)=>{
        return { posts: [...prevState.posts, newPost]}
      });
    }).catch(error=>{
      console.log("Failed to create post data.");
    });
  }

  // update post
  handleUpdatePost = (post) => {
    updatePosts(post).then(updatePost=> {
      // console.log(updatePost);
      this.setState((prevState)=>{
        let updatedList = prevState.posts.map(pt=>{
          if(pt.id===updatePost.id) {
            return updatePost;
          }else{
            return pt;
          }
        })
        return { posts: [...updatedList]}
      });
    }).catch(error=>{
      console.log("Failed to create post data.");
    });
  }

  handlePost = (post) =>{
    // console.log(post.id);
    if(post.id !== undefined && post.id !=="" && post.id !== null)
      this.handleUpdatePost(post);
    else 
      this.hadleNewPost(post);
  }

  //delete post
  handleDelete = (id) =>{
    deletePosts(id).then(respose=>{
      this.setState((preState)=>{
        const filterPost = preState.posts.filter(post=>{
          return post.id != id;
        });
        return { posts : filterPost};
      })
    }).catch(error=>{
      console.log("Failed to delete a post data.");
    });;
  }

  // update post
  handleUpdate =(post) =>{
    // console.log(post);
    this.setState({ post : post});
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
          <PostDetails key={post.id} post={post}  onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
        ))}
      </div>
    );
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
      { <PostForm categories={this.state.categories} post={this.state.post} onNewPost={this.handlePost} />
    }
      {this.renderPosts()}
    </div>);
  }
}

export default Posts;
