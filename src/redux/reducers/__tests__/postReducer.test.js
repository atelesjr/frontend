import postReducer from 'redux/reducers/postsReducer';

const INITIAL_STATE = {}

it('handles action of type GET_POST', () =>{
    const action ={
        type: 'GET_POSTS'
    };

    const newState = postReducer(INITIAL_STATE, action);
  
    expect(newState).toEqual({
        loading: true,
        error: false,
        posts: null,
    });

});

it('handles action of type GET_POSTS_SUCCESS', () =>{
    const action ={
        type: 'GET_POSTS_SUCCESS',
        payload: "New Post"
    };

    const newState = postReducer(INITIAL_STATE, action);
   
    expect(newState).toEqual({
        loading: false,
        error: false,
        posts: action.payload
    });

});


it('handles action of type GET_POSTS_SUCCESS', () =>{
    const action ={
        type: 'GET_POSTS_ERROR'
    };

    const newState = postReducer(INITIAL_STATE, action);
   
    expect(newState).toEqual({
        loading: false,
        error: true,
    });

});
