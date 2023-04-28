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
            active: true,
        },
        {
            id: 2,
            username: 'star',
            email: 'star@naver.com',
            active: false,
        },
        {
            id: 3,
            username: 'moon',
            email: 'moon@naver.com',
            active: false,
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

    const onRemove = (id) => {
        // 배열 불변성 유지 위해 특정 조건이 만족하는 원소들만 추출하여 새로운 배열을 만들어줌
        setUsers(users.filter((user) => user.id !== id))
    }

    const onToggle = (id) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        )
    }

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
    )
}

export default useRefSample
