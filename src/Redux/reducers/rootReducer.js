const initialState = {
  dataSf: [],
  dataGh: [],
  loading: true,
  errorSf: {
    isError:false,
    code: null,
    text: ''
  },
  errorGh: {
    isError:false,
    code: null,
    text: ''
  }
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return {
        ...state, 
        loading: true
      }
    case 'GET_SF_DATA_SUCCESS':
        return {
          ...state, 
          dataSf: action.payload, 
          loading: false 
        }
    case 'GET_GH_DATA_SUCCESS':
        return {...state, 
          dataGh: action.payload, 
          loading: false 
        }
    case 'GET_SF_DATA_ERROR':
        return {
          ...state, 
          loading: false, 
          errorSf: {
            ...state.errorGh,
            isError: true,
            code: action.error.code,
            text: action.error.text
          }
        }
    case 'GET_GH_DATA_ERROR':
        return {
          ...state, 
          loading: false, 
          errorGh: {
            ...state.errorGh,
            isError: true,
            code: action.error.code,
            text: action.error.text
          }
        }
    default:
      return state
  }
};
