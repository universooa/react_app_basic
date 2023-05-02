// eslint-disable-next-line import/no-cycle
import UserList from './UserList'
import React, {
    useCallback,
    useMemo,
    useReducer,
    useRef,
    useState,
} from 'react'
// eslint-disable-next-line import/no-cycle
import CreateUser from './CreateUser'
import { func } from 'prop-types'
import useInputs from './useInputs'

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중..')
    return users.filter((user) => user.active).length
}

const initialState = {
    inputs: {
        username: '',
        email: '',
    },
    users: [
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
    ],
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value,
                },
            }

        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            }

        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : user
                ),
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            }
        default:
            return state
    }
}

export const UserDispatch = React.createContext(null)

function useRefSample() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { users } = state

    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />

            <UserList users={users} />
            <div>활성 사용자 수 :{count}</div>
        </UserDispatch.Provider>
    )
}

export default useRefSample
