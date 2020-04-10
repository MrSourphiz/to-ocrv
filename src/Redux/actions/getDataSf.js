export function getSfDataSuccess(response) {
    return {
        type: 'GET_DATA_SUCCESS',
        payload: response.items
    }
}

export function getSfData(url) {
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
            .then(response => dispatch(getSfDataSuccess(response)))
    }
}