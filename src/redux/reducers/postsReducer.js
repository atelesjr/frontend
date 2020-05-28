const INITIAL_STATE = {
    posts: null,
    loading: false,
    error: false,
    //errorCode: 0,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            //console.log('action', action)
            return {
                ...state,
                loading: true,
                error: false,
                posts: null,
            }
        case 'GET_POSTS_SUCCESS':
            console.log('action', action)
            return {
                ...state,
                loading: false,
                error: false,
                posts: action.payload
            }
        case 'GET_POSTS_ERROR':
            //console.log('action', action)
            return {
                ...state,
                loading: false,
                error: true,
                //errorCode: action.payload.error.errorCode,
                
            }
        default:
            return state
    }
}

export default reducers