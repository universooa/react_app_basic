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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
