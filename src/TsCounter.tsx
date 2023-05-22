import React, { useState } from 'react'

function TsCounter() {
    const [count, setCount] = useState<number>(0)
    const onIncrease = () => setCount(count + 1)
    const onDecrease = () => setCount(count - 1)
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button type="button" onClick={onIncrease}>
                    +1
                </button>
                <button type="button" onClick={onDecrease}>
                    -1
                </button>
            </div>
        </div>
    )
}

export default TsCounter
