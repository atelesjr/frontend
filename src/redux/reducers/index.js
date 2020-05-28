import { combineReducers } from 'redux';

// reducers
import postsReducer from './postsReducer';

const reducers = () => combineReducers({
    posts: postsReducer

})

export default reducers;