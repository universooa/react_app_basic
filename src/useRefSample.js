import UserList from './UserList'
import { useMemo, useRef, useState } from 'react'
import CreateUser from './CreateUser'

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중..')
    return users.filter((user) => user.active).length
}

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

    const count = useMemo(() => countActiveUsers(users), [users])

    /* deps 배열 안에 넣은 내용이 바뀌면 우리가 등록한 함수를 호출해서 값을 연산해주고,
    만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용 */

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수 :{count}</div>
        </>
    )
}

export default useRefSample
