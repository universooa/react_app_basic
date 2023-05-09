export default function createAsyncDispatcher(type, promiseFn) {
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    // ...rest를 사용하여 나머지 파라미터를 rest 배열에 담는다
    async function actionHandler(dispatch, ...rest) {
        dispatch({ type })
        try {
            const data = await promiseFn(...rest) // rest 배열을 spread로 넣어줌
            dispatch({
                type: SUCCESS,
                data,
            })
        } catch (e) {
            dispatch({
                type: ERROR,
                error: e,
            })
        }
    }
    return actionHandler // 만든 함수를 반환함
}

export const initialAsyncState = {
    loading: false,
    data: null,
    error: null,
}

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
    loading: true,
    data: null,
    error: null,
}

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
    loading: false,
    data,
    error: null,
})

// 실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
    loading: false,
    data: null,
    error,
})

// 세가지 액션을 처리하는 리듀서를 만듦
// type은 액션 타입, key는 리듀서에서 사용할 필드 이름 ( ex: user,users)

export function createAsyncHandler(type, key) {
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    function handler(state, action) {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState,
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data),
                }
            case ERROR:
                return {
                    ...state,
                    [key]: error(action.error),
                }
            default:
                return state
        }
    }
    return handler
}
