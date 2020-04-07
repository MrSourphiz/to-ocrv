export function postsFetchDataSuccess(data) {
    return {
        type: 'ADD_GH',
        posts: data
    }
}

export function postsFetchDataGh(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response=> response.json())
            .then(data => dispatch(postsFetchDataSuccess(data)))

    }
}