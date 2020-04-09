export function getDataSuccess(response) {
    return {
        type: 'GET_DATA_SUCCESS',
        payload: response.items
    }
}

export function getData(url) {
    return (dispatch) => {
        dispatch({
            type: 'GET_DATA_REQUEST'
        })
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    dispatch({
                        type: 'GET_DATA_ERROR',
                        error: 'response.statusText'
                    })
                }
                return response;
            })
            .then(response=> response.json())
            .then(response => dispatch(getDataSuccess(response)))
    }
}