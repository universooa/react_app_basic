import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function User({ user, onRemove, onToggle }) {
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
