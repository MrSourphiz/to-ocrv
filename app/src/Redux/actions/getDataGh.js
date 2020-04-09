export function getGhDataSuccess(response) {
    return {
        type: 'GET_GH_DATA_SUCCESS',
        payload: response
    }
}

export function getGhData(url) {
    return (dispatch) => {
        dispatch({
            type: 'GET_GH_DATA_REQUEST'
        })
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    dispatch({
                        type: 'GET_GH_DATA_ERROR',
                        error: 'response.statusText'
                    })
                }
                return response;
            })
            .then(response=> response.json())
            .then(response => dispatch(getGhDataSuccess(response)))
    }
}