//import React, { Component } from 'react'  //No longer need {Component} as functional components are used instead
import React from 'react'
import PropTypes from 'prop-types'


function Photo(props){
    const post = props.post

    return <figure className="figure">
    <img src={post.imageLink} alt={post.description}/>

    <figcaption><p>{post.description}</p></figcaption>

    <div className="button-container">
        <button className="remove-button" onClick={()=>{props.onRemovePhoto(post)}}>
            Remove
        </button>
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
    onRemovePhoto: PropTypes.func.isRequired,
}

export default Photo