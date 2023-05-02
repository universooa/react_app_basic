import { Component } from 'react'

class LifeCycleSample extends Component {
    myRef = null

    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            color: null,
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState)
        if (snapshot) {
            console.log('업데이트 되기 직전 색상:', snapshot)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick = () => {
        this.setState((previousState) => ({
            number: previousState.number + 1,
        }))
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null
    }

    render() {
        console.log('render')
        const style = {
            // eslint-disable-next-line react/destructuring-assignment
            color: this.props.color,
        }
        return (
            <div>
                <h1
                    style={style}
                    ref={(ref) => {
                        this.myRef = ref
                    }}
                >
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button type="button" onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample
