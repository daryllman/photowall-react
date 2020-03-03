import React, {Component} from 'react'
import Photo from './Photos'
import Comments from './Comments'

class Single extends Component {
    render(){
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.posts.find((post) => post.id === id)
        console.log(posts) //it is an Object with posts array and comments array
        const comments = this.props.comments[match.params.id] || []  //prevent crashing
        const index = this.props.posts.posts.findIndex((post)=> post.id===id)

        if (this.props.loading === true){
            return<div className="loader">...loading</div>
        }else{
            return <div className='single-photo'>
            <Photo post={post} {...this.props} index={index}/>
            <Comments addComment={this.props.addComment} comments={comments} id={id}/>

            </div>
        }

        
    }

}

export default Single