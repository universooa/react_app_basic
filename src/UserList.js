import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function User({ user }) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <b>{user.username}</b>
            {/* eslint-disable-next-line react/prop-types */}
            <span>({user.email})</span>
        </div>
    )
}

User.propsTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
    }),
}

function UserList() {
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
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}
export default UserList
