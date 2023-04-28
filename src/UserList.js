import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function User({ user, onRemove }) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <b>{user.username}</b>
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

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    )
}
export default UserList
