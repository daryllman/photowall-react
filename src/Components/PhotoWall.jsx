//import React, { Component } from 'react'  //No longer need {Component} as functional components are used instead
import React from 'react'
import Photo from './Photos.jsx'
import PropTypes from 'prop-types'
//anchor tag, href attribute 

function PhotoWall(props){
    return <div>
        <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"> </a>
            {/* <button className="addIcon" onClick={props.onNavigate}> </button> */}
            <div className="photoGrid">
                {props.posts.map((post, index)=>
                    <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>
                )}
            </div>
</div>
}

//PropTypes ensures that we do not pass an empty object & pass the correct object 
//helps in debugging, can get too complex to debug if we don't have proptypes
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired, //isRequired flag ensures that this is being passed
    onRemovePhoto: PropTypes.func.isRequired
}

/*
class PhotoWall{
    render(){
        return <div className="photoGrid">
    {this.props.posts.map((post, index)=>
        <Photo key={index} post={post}/>
    )}
</div>
    }
}
*/

export default PhotoWall