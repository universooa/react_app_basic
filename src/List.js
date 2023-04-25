import { useParams, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function List() {
    const { listId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const offset = searchParams.get('offset')
    const limit = searchParams.get('limit')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(
            `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`
        )
            .then((response) => response.json())
            .then((result) => setPosts(result))
    }, [offset, limit])

    const movePage = (pageNumber) => {
        searchParams.set('offset', (pageNumber - 1) * 10)
        setSearchParams(searchParams)
    }

    return (
        <section>
            <h1>This is Posts</h1>
            <h3>{listId}번 페이지입니다.</h3>
            {posts.map(({ id, title }) => (
                <article key={{ id }}>
                    <p>
                        <div>id:{id}</div>
                        <div>title:{title}</div>
                    </p>
                </article>
            ))}
            <div>
                <button type="submit" onClick={() => movePage(1)}>
                    1
                </button>
                <button type="submit" onClick={() => movePage(2)}>
                    2
                </button>
                <button type="submit" onClick={() => movePage(3)}>
                    3
                </button>
            </div>
        </section>
    )
}

export default List
