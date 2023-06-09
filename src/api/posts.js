// n 밀리세컨드 동안 기다리는 프로미스를 만들어주는 함수
import axios from 'axios'

// eslint-disable-next-line no-promise-executor-return
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n))

// 가짜 포스트 목록 데이터
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다',
        body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.',
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!',
    },
    {
        id: 3,
        title: 'redux-saga도 사용해봅시다',
        body: '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.',
    },
]

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    // await sleep(500)
    // return posts
    const response = await axios.get('http://localhost:4000/posts') // full로 안쓰면 프록시가 아닌 기존 도메인으로 호출 -> json-server 실행해야함
    // npx json-server ./data.json --port 4000
    return response.data
}

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
    // await sleep(500)
    // return posts.find((post) => post.id === id)
    const response = await axios.get(`http://localhost:4000/posts/${id}`)
    return response.data
}
