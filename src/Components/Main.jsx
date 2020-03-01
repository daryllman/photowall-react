import React, {Component} from 'react'
import Title from './Title.jsx'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'



class Main extends Component{
    // we want to put posts array in state as we want it to update and change accordingly (ie. have states)
    constructor(){
        super() //so we can access this

        //properly binding context to removePhoto() function
        //so that context is correct
        // this.removePhoto = this.removePhoto.bind(this)

        console.log('constructor')
    }

    // removePhoto(postRemoved){
    //     console.log(postRemoved.description)
    //     //note that "this." is used here---> requires the correct context
    //     this.setState((state)=>({
    //         posts: state.posts.filter(post=>post !==postRemoved)
    //     }))
    // }

    // addPhoto(postSubmitted){
    //     this.setState(state=>({
    //         posts: state.posts.concat([postSubmitted])
    //     }))
    // }


    /*
    //componentDidMount() gets called after render() is done
    //render() has no data at the start.
    //componentDidMount() updates state and causes UI to re-render - render() gets called again
    componentDidMount(){ 
        const postsData = SimulateFetchFromDatabase()
        this.setState({
            posts: postsData
        })
    }
    */

    render(){
        //console.log(this.props.posts)
        return <div>
            <Route exact path="/" render={()=>(
                        <div>
                            <Title title = {'PhotoWall'}/>
                            <PhotoWall posts={this.props.posts} />
                        </div>
            )}/>

            {/* <Route exact path="/AddPhoto" render={({history})=>(
                        <div>
                            <AddPhoto onAddPhoto={(addedPost)=>{
                                this.addPhoto(addedPost)
                                history.push('/')
                            }}/>
                        </div>
            )}/> */}

        </div>
    }
}

// For Routing:
// Note if you only have one component to render, use the component attribute. eg. <Route path="/AddPhoto" component={AddPhoto}/>
// If not can use the render attribute


// function mapStateToProps(state){
//     return {
//         posts: state
//     }
// }

export default Main
//export default connect(mapStateToProps)(Main)
