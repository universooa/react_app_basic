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
                <Link to="/cssTest">
                    <li>cssTest</li>
                </Link>
                <Link to="/globalStyle">
                    <li>To do List</li>
                </Link>
                <Link to="/apiTest">
                    <li>API Test</li>
                </Link>
                <Link to="/reduxTest">
                    <li>redux Test</li>
                </Link>
                <Link to="/reduxMiddleWareTest">
                    <li>reduxMiddleWare Test</li>
                </Link>
                <Link to="/postListPage">
                    <li>postListPage Test</li>
                </Link>
                <Link to="/postListPage/1">
                    <li>postListPage 1 Test</li>
                </Link>
                <Link to="/typeScriptApp">
                    <li>typeScript App</li>
                </Link>
            </ul>
        </>
    )
}

export default Main
