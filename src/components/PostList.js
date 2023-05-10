import { Link, useLocation } from 'react-router-dom'

function PostList({ posts }) {
    const location = useLocation()

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`${location.pathname}/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PostList
