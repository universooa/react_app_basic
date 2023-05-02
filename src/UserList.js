import PropTypes from 'prop-types'
import React, { useContext, useEffect } from 'react'
// eslint-disable-next-line import/no-cycle
import { UserDispatch } from './useRefSample'

// eslint-disable-next-line react/prop-types
const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch)

    return (
        <div>
            {/* eslint-disable-next-line react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black',
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id })
                }}
            >
                {user.username}
            </b>
            {/* eslint-disable-next-line react/prop-types */}
            <span>({user.email})</span>
            <button
                type="submit"
                onClick={() => {
                    dispatch({ type: 'REMOVE_USER', id: user.id })
                }}
            >
                삭제
            </button>
        </div>
    )
})

User.propsTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
    }),
}

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}
export default React.memo(UserList)
