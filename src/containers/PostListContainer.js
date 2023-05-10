import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../modules/posts'
import { useEffect } from 'react'
import PostList from '../components/PostList'

function PostListContainer() {
    const { data, loading, error } = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    // 컴포넌트 마운트 후 포스트 목록 요청
    useEffect(() => {
        if (data) return // 데이터가 이미 존재한다면 재요청 안함
        dispatch(getPosts())
    }, [dispatch])

    if (loading && !data) return <div>로딩 중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return null
    return <PostList posts={data} />
}

export default PostListContainer
