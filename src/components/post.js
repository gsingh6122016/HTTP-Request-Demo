import React  from 'react';
import classes from './post.module.css';

const Post = (props) => {
    
        return (
            <article className={classes.post} onClick={props.clicked}>
                <h1>{props.title}</h1>
                <div>{props.author}</div>
            </article>
        );
    }

export default Post;