import { put, call } from 'redux-saga/effects'

import { posts } from 'redux/api'

export function* getPosts({ payload }) {
    console.log('saga Posts', payload)

    try {
        const data = yield call(posts, payload)
        console.log('data -> posts', data)
        if(data.error){
            yield put({ type: 'GET_POSTS_ERROR', payload: data })
        } else {
            yield put({ type: 'GET_POSTS_SUCCESS', payload: data })
        }
    } catch (error) {
        console.log('error', error)
        yield put({ type: 'GET_POSTS_ERROR', payload: error })
    }
}