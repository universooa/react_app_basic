import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UseEffectTest() {
    const { useEffectId } = useParams()
    const [count, setCount] = useState(0)
    const countUp = () => setCount(count + 1)

    useEffect(() => {
        console.log('useEffect!!', count)
    })

    return (
        // return 먼저 실행 됨.
        <div>
            <p>useEffectId:{useEffectId}</p>
            <p>{count}번 클릭!</p>
            <button type="submit" onClick={countUp}>
                Click Me
            </button>
        </div>
    )
}

export default UseEffectTest
