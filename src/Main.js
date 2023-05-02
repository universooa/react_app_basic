import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import Hello from './Hello'

function Main() {
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
                <Link to="/animation">
                    <li>Animation</li>
                </Link>

                <Link to="/hello">
                    <li>Hello</li>
                </Link>
                <Wrapper>
                    <Hello isSpecial />
                    <Hello name="hello2" color="orange" />
                </Wrapper>
                <Link to="/inputSample">
                    <li>InputSample</li>
                </Link>
                <Link to="/reactHookSample">
                    <li>reactHookSample</li>
                </Link>
                <Link to="/randomColors">
                    <li>randomColors</li>
                </Link>
                <Link to="/catchTest">
                    <li>catchTest</li>
                </Link>
            </ul>
        </>
    )
}

export default Main
