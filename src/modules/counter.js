/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣기
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지

const SET_DIFF = 'counter/SET_DIFF'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내기
export const setDiff = (diff) => ({
    type: SET_DIFF,
    diff,
})
export const increase = () => ({
    type: INCREASE,
})
export const decrease = () => ({
    type: DECREASE,
})

export const increaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(increase()), 1000)
}

export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(decrease()), 1000)
}

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1
        case DECREASE:
            return state - 1
        default:
            return state
    }
}

// /* 초기 상태 선언 */
// const initialState = {
//     number: 0,
//     diff: 1,
// }
//
// /* 리듀서 선언 */
// // 리듀서는 export default로 내보냄
// export default function counter(state = initialState, action) {
//     switch (action.type) {
//         case SET_DIFF:
//             return {
//                 ...state,
//                 diff: action.diff,
//             }
//
//         case INCREASE:
//             return {
//                 ...state,
//                 number: state.number + state.diff,
//             }
//
//         case DECREASE:
//             return {
//                 ...state,
//                 number: state.number - state.diff,
//             }
//
//         default:
//             return state
//     }
// }
