/* 액션 타입 */

// 포스트 여러개 조회하기
import * as postsAPI from '../api/posts'
import {
    createPromiseSaga,
    createPromiseSagaById,
    handleAsyncActions,
    handleAsyncActionsById,
    reducerUtils,
} from '../lib/asyncUtils'
import { takeEvery } from 'redux-saga/effects'
import { useNavigate } from 'react-router-dom'

const GET_POSTS = 'GET_POSTS' // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청 실패

// 포스트 하나 조회
const GET_POST = 'GET_POST'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_ERROR = 'GET_POST_ERROR'
const GO_TO_HOME = 'GO_TO_HOME'
// 포스트 비우기
const CLEAR_POST = 'CLEAR_POST'

// thunk를 사용할 때, 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없음
// 그냥 thunk 함수에서 바로 액션 객체를 만들어도 됨
//
// export const getPosts = () => async (dispatch) => {
//     dispatch({ type: GET_POSTS }) // 요청이 시작됨
//     try {
//         const posts = await postsAPI.getPosts() // API 호출
//         dispatch({ type: GET_POSTS_SUCCESS, posts }) // 성공
//     } catch (e) {
//         dispatch({ type: GET_POSTS_ERROR, error: e }) // 실패
//     }
// }

// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts)
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById)

export const getPosts = () => ({ type: GET_POSTS })
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id })
export const goToHomePostSaga = () => ({ type: GO_TO_HOME })
//
// function* getPostsSaga() {
//     try {
//         const posts = yield call(postsAPI.getPosts) // call을 사용하면 특정 함수를 호출하고, 결과물이 반환될 때까지 기다려줄 수 있음
//         yield put({
//             type: GET_POSTS_SUCCESS,
//             payload: posts,
//         }) // 성공 액션 디스패치
//     } catch (e) {
//         yield put({
//             type: GET_POSTS_ERROR,
//             error: true,
//             payload: e,
//         }) // 실패 액션 디스패치
//     }
// }
//
// // 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용할 수 있음
// function* getPostSaga(action) {
//     const param = action.payload
//     const id = action.meta
//     try {
//         const post = yield call(postsAPI.getPostById, param) // api 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어줌
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post,
//             meta: id,
//         })
//     } catch (e) {
//         yield put({
//             type: GET_POST_ERROR,
//             error: true,
//             payload: e,
//             meta: id,
//         })
//     }
// }

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts)
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById)

function* goToHomeSaga() {
    const navigate = yield useNavigate()
    navigate('/')
}

// 사가들을 합치기
export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_POST, getPostSaga)
    yield takeEvery(GO_TO_HOME, goToHomePostSaga)
}

export const clearPost = () => ({ type: CLEAR_POST })
//
// // thunk함수에서도 파라미터를 받아서 사용할 수 있음
// export const getPost = (id) => async (dispatch) => {
//     dispatch({ type: GET_POST }) // 요청이 시작됨
//     try {
//         const post = await postsAPI.getPostById(id)
//         dispatch({ type: GET_POST_SUCCESS, post })
//     } catch (e) {
//         dispatch({ type: GET_POST_ERROR, error: e })
//     }
// }

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
}
export const goToHome = (navigate) => (dispatch, getState) => {
    navigate('/') // home으로 이동
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action)
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action)
        // case CLEAR_POST:
        //     return {
        //         ...state,
        //         post: reducerUtils.initial(),
        //     }
        default:
            return state
    }
}
