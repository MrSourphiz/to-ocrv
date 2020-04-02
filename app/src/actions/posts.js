export function postsFetchDataSuccess(posts) {
    return {
        type: 'POSTS_FETCH_DATA_SUCCESS',
        posts
    }
}

export function postsFetchData(url) {
    return (dispatch)=> {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response=> response.json())
            .then(posts => dispatch(postsFetchDataSuccess(posts)))

    }
}