function CatchTest({ user }) {
    return (
        <div>
            <div>
                <b>ID:</b>:{user.id}
            </div>
            <div>
                <b>Username:</b>
                {user.username}
            </div>
        </div>
    )
}

export default CatchTest
