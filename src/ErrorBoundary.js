import { Component } from 'react'

import * as Sentry from '@sentry/browser'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true,
        })
        if (process.env.NODE_ENV === 'production') {
            Sentry.captureException(error, { extra: info })
        }
    }

    render() {
        if (this.state.error) {
            return <h1>에러 발생!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
