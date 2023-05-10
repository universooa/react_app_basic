// 리듀서에서 사용할 수 있는 여러 유틸 함수들
export const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    // 로딩 중 상태
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: (payload) => ({
        loading: false,
        data: payload,
        error: null,
    }),
    error: (error) => ({
        loading: false,
        data: null,
        error,
    }),
}

// 특정 id를 처리하는 Thunk 생성함수
const defaultIdSelector = (param) => param
export const createPromiseThunkById = (
    type,
    promiseCreator,
    // 파라미터에서 id 를 어떻게 선택 할 지 정의하는 함수입니다.
    // 기본 값으로는 파라미터를 그대로 id로 사용합니다.
    // 하지만 만약 파라미터가 { id: 1, details: true } 이런 형태라면
    // idSelector 를 param => param.id 이런식으로 설정 할 수 있곘죠.
    idSelector = defaultIdSelector
) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return (param) => async (dispatch) => {
        const id = idSelector(param)
        dispatch({ type, meta: id })
        try {
            const payload = await promiseCreator(param)
            dispatch({ type: SUCCESS, payload, meta: id })
        } catch (e) {
            dispatch({ type: ERROR, error: true, payload: e, meta: id })
        }
    }
}

// id 별로 처리하는 유틸함수
export const handleAsyncActionsById = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    return (state, action) => {
        const id = action.meta
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            // state[key][id]가 만들어져있지 않을 수도 있으니까 유효성을 먼저 검사 후 data 조회
                            keepData
                                ? state[key][id] && state[key][id].data
                                : null
                        ),
                    },
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload),
                    },
                }
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload),
                    },
                }
            default:
                return state
        }
    }
}

// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성되었습니다.
    // 만약 여러 종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 됩니다.
    // 예: writeComment({ postId: 1, text: '댓글 내용' });
    return (param) => async (dispatch) => {
        // 요청 시작
        dispatch({ type, param })
        try {
            // 결과물의 이름을 payload라는 이름으로 통일시킴
            const payload = await promiseCreator(param)
            dispatch({ type: SUCCESS, payload })
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true })
        }
    }
}

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
// type 은 액션의 타입, key 는 상태의 key (예: posts, post) 입니다.

export const handleAsyncActions = (type, key, keepData = false) => {
    // keepData라는 파라미터를 추가하여 만약 이 값이 true면 로딩을 할 때에도 데이터 유지
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(
                        keepData ? state[key].data : null
                    ),
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                }

            default:
                return state
        }
    }
}
