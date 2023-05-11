import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPost, goToHome } from '../modules/posts'
import Post from '../components/Post'
import { useNavigate } from 'react-router-dom'

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null,
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (data) return
        dispatch(getPost(postId))
    }, [dispatch, postId])

    if (loading && !data) return <div>로딩 중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return null

    return (
        <>
            <button type="button" onClick={() => dispatch(goToHome(navigate))}>
                홈으로 이동
            </button>

            <Post post={data} />
        </>
    )
}

export default PostContainer
