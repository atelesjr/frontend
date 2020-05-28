import { all, takeLatest } from 'redux-saga/effects'

//saga
import { getPosts } from './posts'


export default function* rootSaga() {
    yield all([
        takeLatest('GET_POSTS', getPosts)
    ]);
};