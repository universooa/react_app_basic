import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { useAsync } from 'react-async'
import User from './User'

async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
}

function Users() {
    const [userId, setUserId] = useState(null)

    const {
        data: users,
        error,
        isLoading,
        run,
    } = useAsync({ deferFn: getUsers })

    if (isLoading) return <div>로딩 중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users)
        return (
            <button type="button" onClick={run}>
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
            <button type="button" onClick={run}>
                다시 불러오기
            </button>
            {userId && <User id={userId} />}
        </>
    )
}
export default Users
