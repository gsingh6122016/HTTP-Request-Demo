import React , { Component } from 'react';
import classes from './sendpost.module.css';
import axios from 'axios';

class Sendpost extends Component {

    state = {
        title: '',
        body: '',
        author: 'max'
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body:this.state.body,
            author:this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(response => {
            console.log(response);
        });
        
    }

   changeHandler = (event) =>
   {
this.setState({ [event.target.name]: event.target.value })
   }

    render(){

        return (
            <div className={classes.sendpost}>
                <h1>Add a post</h1>
                <label className={classes.label}>Title</label><br/>
                <input type='text' name = 'title' value={this.state.title} onChange={this.changeHandler}></input><br/>
                <label>Content</label><br/>
                <textarea rows='4'  name='body' value={this.state.body} onChange={this.changeHandler}></textarea><br/>
                <label>Author</label><br/>
                <select  name='author' value={this.state.author} onChange={this.changeHandler}>
                    <option value='max'>Max</option>
                    <option value='manu'>Manu</option>
                </select><br/>
                <button onClick={this.postDataHandler}>add Post</button>
            </div>
        );
    }
}

export default Sendpost;