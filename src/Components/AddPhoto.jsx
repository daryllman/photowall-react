import React, {Component} from 'react'

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault(); //Prevent the default behaviour of wanting to refresh page upon button click
        const imageLink = event.target.linkVal.value
        const imageDescription = event.target.descriptionVal.value
        const post = {
            id: Number(new Date()),
            description: imageDescription,
            imageLink: imageLink
        }
        if (imageLink && imageDescription){
            this.props.addPost(post)
            this.props.history.push('/')
        }
    }


    render(){
        return(
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="linkVal"/>
                        <input type="text" placeholder="Description" name="descriptionVal"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        ) 
    }

}

export default AddPhoto