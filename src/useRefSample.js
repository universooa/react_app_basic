import UserList from './UserList'
import { useRef, useState } from 'react'
import CreateUser from './CreateUser'

function useRefSample() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    })
    const { username, email } = inputs
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const [users, setUsers] = useState([
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
    ])

    const nextId = useRef(4) // 이 값이 current 가 됨.
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        }

        setUsers([...users, user]) // 또는 setUsers(users.concat(user));
        // 배열은 불변성을 지켜주어야함.

        setInputs({
            username: '',
            email: '',
        })

        nextId.current += 1
    }

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            <UserList users={users} />
        </>
    )
}

export default useRefSample
