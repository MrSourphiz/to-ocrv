const initialState = {
  dataSf: [],
  dataGh: [],
  loading: true,
  error: '' 
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return {...state, loading: true}
    case 'GET_DATA_SUCCESS':
        return {...state, dataSf: action.payload, loading: false }
    case 'GET_GH_DATA_SUCCESS':
        return {...state, dataGh: action.payload, loading: false }
    case 'GET_DATA_ERROR':
        return {loading: false, error: action.error}
    default:
      return state
  }
}
