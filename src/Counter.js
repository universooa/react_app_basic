import { useReducer } from 'react'

function init(initialState) {
    return { count: initialState }
}
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload }
        case 'DECREMENT':
            return { count: state.count - action.payload }
        case 'RESET':
            return init(action.payload)
        default:
            throw new Error('unsupported action type: ', action.type)
    }
}

function Counter() {
    const initialState = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h2>{state.count}</h2>
            <button
                type="submit"
                onClick={() => dispatch({ type: 'RESET', payload: 0 })}
            >
                초기화
            </button>
            <button
                type="submit"
                onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
            >
                증가
            </button>
            <button
                type="submit"
                onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
            >
                감소
            </button>

            <button
                type="submit"
                onClick={() => dispatch({ type: 'error', payload: 1 })}
            >
                에러
            </button>
        </>
    )
}

export default Counter
