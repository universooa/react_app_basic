import { useParams } from 'react-router-dom'
import PostContainer from '../containers/PostContainer'

function PostPage(props) {
    const { id } = useParams() // url 파라미터 조회

    // url 파라미터 값은 문자열이므로 parseInt를 사용하여 숫자로 변환
    return <PostContainer postId={parseInt(id, 10)} />
}

export default PostPage
