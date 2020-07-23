import React , { Component } from 'react';
import Post from './components/post'
import Fullpost from './components/fullpost'
import Sendpost from './components/sendpost'
import './App.css';
import axios from 'axios';

class App extends Component {

      state = {
        Posts : [],
        SelectedPostId: null,
        error: false
      }

      componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/postsg')
        .then(response => {
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: 'max'
            }
          });
          this.setState({Posts: updatedPosts});
        })
        .catch(error => {
          // console.log(error);
          this.setState({ error: true });
        });
      }

      fullPostHandler = (id) =>{
        this.setState({SelectedPostId: id});
      }

  render(){
    let posts = <p>something went wrong!!!</p>;
    if(!this.state.error) {
      posts = this.state.Posts.map(post => {
        return <Post 
        title={post.title} 
        author={post.author}
        key ={post.id}
        clicked = {() => this.fullPostHandler(post.id)}
        >
        
        </Post>
      });
    }
    
    return (
      <div className="App">
        <p>this is an app</p>

        {posts}
        
        <Fullpost id = {this.state.SelectedPostId}></Fullpost>
        <Sendpost></Sendpost>
      </div>
    );
  }
}

export default App;
