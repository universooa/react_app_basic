import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import rootReducer, { rootSaga } from './modules'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger/src'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import axios from 'axios'
import createSagaMiddleware from 'redux-saga'

axios.default.baseURL =
    process.env.NODE_ENV === 'development'
        ? '/'
        : 'https://blog.naver.com/rkttndk'
//
// Sentry.init({
//     dsn: 'https://6fd01d1e166e40639eea99913e5194c7@o4505112906039296.ingest.sentry.io/4505112907546624',
//     integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
//     // Performance Monitoring
//     tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
//     // Session Replay
//     replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//     replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// })

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger))
) // 여러개의 미들웨어 적용 가능

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

sagaMiddleware.run(rootSaga) // store 생성이 된 후에 코드를 실행해야 함
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
