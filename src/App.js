import './App.css'
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

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/list/:listId" element={<List />} />
                    <Route
                        path="/useEffect/:useEffectId"
                        element={<UseEffectTest />}
                    />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/animation" element={<AnimationPage />} />
                    <Route path="/animation/sunRise" element={<SunRise />} />
                    <Route
                        path="/hello"
                        element={<Hello name="hi" color="red" />}
                    />
                    <Route path="/inputSample" element={<InputSample />} />
                    <Route
                        path="/reactHookSample"
                        element={<ReactHookSample />}
                    />
                    <Route path="/useRefSample" element={<UseRefSample />} />
                    <Route path="/userList" element={<UserList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default hot(module)(App)
