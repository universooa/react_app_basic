import { Component } from 'react'

class LifeCycleSample extends Component {
    myRef = null

    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            color: null,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4
    }

    handleClick = () => {
        this.setState((previousState) => ({
            number: previousState.number + 1,
        }))
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null
    }

    render() {
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
