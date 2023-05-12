import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { hot } from 'react-hot-loader'
import Header from './Header'
import Main from './Main'
import Product from './Product'
import NotFound from './NotFound'
import List from './List'
import UseEffectTest from './UseEffectTest'
import Counter from './Counter'
import AnimationPage from './AnimationPage'
import SunRise from './SunRise'
import Hello from './Hello'
import InputSample from './inputSample'
import UserList from './UserList'
import ReactHookSample from './ReactHookSample'
import UseRefSample from './useRefSample'
import RandomColors from './RandomColors'
import ErrorBoundary from './ErrorBoundary'
import CatchTest from './CatchTest'
import CssTest from './CssTest'
import GlobalStyle from './components/GlobalStyle'
import ApiTest from './ApiTest'
import ReduxTest from './ReduxTest'
import ReduxMiddleWareTest from './ReduxMiddleWareTest'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import './App.scss'
// eslint-disable-next-line import/extensions,import/no-unresolved
import TypeApp from './TypeApp'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ErrorBoundary>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route
                            path="/product/:productId"
                            element={<Product />}
                        />
                        <Route path="/list/:listId" element={<List />} />
                        <Route
                            path="/useEffect/:useEffectId"
                            element={<UseEffectTest />}
                        />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/animation" element={<AnimationPage />} />
                        <Route
                            path="/animation/sunRise"
                            element={<SunRise />}
                        />
                        <Route
                            path="/hello"
                            element={<Hello name="hi" color="red" />}
                        />
                        <Route path="/inputSample" element={<InputSample />} />
                        <Route
                            path="/reactHookSample"
                            element={<ReactHookSample />}
                        />
                        <Route
                            path="/useRefSample"
                            element={<UseRefSample />}
                        />
                        <Route path="/userList" element={<UserList />} />
                        <Route
                            path="/randomColors"
                            element={<RandomColors />}
                        />
                        <Route path="/catchTest" element={<CatchTest />} />
                        <Route path="/cssTest" element={<CssTest />} />
                        <Route path="/globalStyle" element={<GlobalStyle />} />
                        <Route path="/apiTest" element={<ApiTest />} />
                        <Route path="/reduxTest" element={<ReduxTest />} />
                        <Route
                            path="/reduxMiddleWareTest"
                            element={<ReduxMiddleWareTest />}
                        />
                        <Route
                            path="/postListPage/*"
                            element={<PostListPage />}
                        />
                        <Route
                            path="/postListPage/:id"
                            element={<PostPage />}
                        />
                        <Route path="/typeScriptApp" element={<TypeApp />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ErrorBoundary>
            </div>
        </BrowserRouter>
    )
}

export default hot(module)(App)
