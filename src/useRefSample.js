import UserList from './UserList'
import { useRef } from 'react'

function useRefSample() {
    const users = [
        {
            id: 1,
            username: 'sualee',
            email: 'rkttndk@naver.com',
        },
        {
            id: 2,
            username: 'star',
            email: 'star@naver.com',
        },
        {
            id: 3,
            username: 'moon',
            email: 'moon@naver.com',
        },
    ]

    const nextId = useRef(4) // 이 값이 current 가 됨.
    const onCreate = () => {
        nextId.current += 1
    }

    return <UserList users={users} />
}

export default useRefSample
