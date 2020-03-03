//import React, { Component } from 'react'  //No longer need {Component} as functional components are used instead
import React from 'react'
import Photo from './Photos.jsx'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props){
    return <div>
            <Link className="addIcon" to="/AddPhoto"/>
            <div className="photoGrid">
                {props.posts.posts
                    .sort(function(x,y){
                        return y.id-x.id
                    })
                    .map((post, index)=>
                    <Photo key={index} post={post} {...props} index={index}/>
                )}
            </div>
</div>
}

//PropTypes ensures that we do not pass an empty object & pass the correct object 
//helps in debugging, can get too complex to debug if we don't have proptypes
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired, //isRequired flag ensures that this is being passed
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