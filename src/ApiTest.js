import Users from './Users'
import { UsersProvider } from './UsersContext'

function ApiTest() {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    )
}

export default ApiTest
