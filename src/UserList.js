import PropTypes from 'prop-types'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log(user)
        // console.log('user 값이 설정됨')
        //
        // return () => {
        //     console.log('user가 바뀌기 전')
        //     console.log(user)
        // }
    })

    return (
        <div>
            {/* eslint-disable-next-line react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black',
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            {/* eslint-disable-next-line react/prop-types */}
            <span>({user.email})</span>
            <button type="submit" onClick={() => onRemove(user.id)}>
                삭제
            </button>
        </div>
    )
}

User.propsTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
    }),
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
}
export default UserList
