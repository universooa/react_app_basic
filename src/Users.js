import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import useAsync from './useAsync'
import User from './User'

async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
}

function Users() {
    const [userId, setUserId] = useState(null)
    const [state, refetch] = useAsync(getUsers, [], true)
    const { loading, data: users, error } = state // state.data를 users 키워드로 조회

    if (loading) return <div>로딩 중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users)
        return (
            <button type="button" onClick={refetch}>
                불러오기
            </button>
        )

    return (
        <>
            <ul>
                {users.map((user) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                    <li
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {user.username}({user.name})
                    </li>
                ))}
            </ul>
            <button type="button" onClick={refetch}>
                다시 불러오기
            </button>
            {userId && <User id={userId} />}
        </>
    )
}
export default Users
