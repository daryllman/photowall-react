//function to remove post
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

//function to add post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post: post
    }
}