import React , { Component } from 'react';
import classes from './fullpost.module.css';
import axios from 'axios';

class Fullpost extends Component {

    state = {
        loadedPost: null
    }
    componentDidUpdate () {

        if(this.props.id)
        {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                this.setState({loadedPost: response.data});
            });
        }
       
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
    }

    render(){
        let post = <p>please select a post!!</p>;
        if(this.props.id)
        {
            post = <p>loading!!</p>;
        }
    if(this.state.loadedPost)
      {  post  = (
            <div className={classes.Fullpost}>
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <button  onClick={this.deletePostHandler}>Delete</button>
            </div>
        );
    }
        return post;
    }
}

export default Fullpost;