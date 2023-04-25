import React from 'react'
import { Link } from 'react-router-dom'

function Main(props) {
    return (
        <>
            <h3>안녕하세요. 메인페이지 입니다.</h3>
            <ul>
                <Link to="/product/1">
                    <li>1번 상품</li>
                </Link>
                <Link to="/product/2">
                    <li>2번 상품</li>
                </Link>
                <Link to="/list/1">
                    <li>1번 리스트</li>
                </Link>
                <Link to="/useEffect/1">
                    <li>1번 useEffect</li>
                </Link>
                <Link to="/counter">
                    <li>Counter</li>
                </Link>
            </ul>
        </>
    )
}
export default Main
