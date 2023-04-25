import './App.css'
import Header from './Header'
import Main from './Main'
import Product from './Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import List from './List'
import React from 'react'
import UseEffectTest from './useEffectTest'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route
                        path="/product/:productId"
                        element={<Product />}
                    ></Route>
                    <Route path="/list/:listId" element={<List />}></Route>
                    <Route
                        path="/useEffect/:useEffectId"
                        element={<UseEffectTest />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
