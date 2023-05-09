import React, { useEffect } from 'react'
import axios from 'axios'
import { useAsync } from 'react-async'
import { getUser, useUsersDispatch, useUsersState } from './UsersContext'

function User({ id }) {
    const state = useUsersState()
    const dispatch = useUsersDispatch()

    useEffect(() => {
        getUser(dispatch, id)
    }, [dispatch, id]) // id값이 바뀔 때마다 getUser()함수 호출됨

    const { data: user, loading, error } = state.user

    // watch 에 넣은 값이 바뀔 때마다 promiseFn에 넣은 함수를 다시 호출해줌

    if (loading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!user) return null

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    )
}

export default User
