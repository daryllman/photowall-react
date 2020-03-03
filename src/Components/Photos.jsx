//import React, { Component } from 'react'  //No longer need {Component} as functional components are used instead
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function Photo(props){
    const post = props.post

    return <figure className="figure">
                 <Link to={`/single/${post.id}`}>
                    <img src={post.imageLink} alt={post.description}/>
                 </Link>

                <figcaption><p>{post.description}</p></figcaption>

                <div className="button-container">
                    <button onClick={()=>{
                        props.removePost(props.index)
                        props.history.push('/')
                        }}>
                        Remove
                    </button>
                    <Link className="button" to={`/single/${post.id}`}>
                        <div className="comment-count">
                            <div className="speech-bubble"></div>
                            {props.comments[post.id] ? props.comments[post.id].length : 0 }
                        </div>
                    </Link>
                </div>
</figure>
}

/*
class Photo {
    render(){
        const post = this.props.post
        return <figure className="figure">
    <img src={post.imageLink} alt={post.description}/>

    <figcaption><p>{post.description}</p></figcaption>

    <div className="button-container">
        <button className="remove-button">Remove</button>
    </div>
</figure>
    }
}
*/


Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo