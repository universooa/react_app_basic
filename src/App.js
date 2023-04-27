import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
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
import Wrapper from './Wrapper'

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
                        element={
                            <Wrapper>
                                <Hello name="hi" color="red" />
                            </Wrapper>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
