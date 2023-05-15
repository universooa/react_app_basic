import React from 'react'
// eslint-disable-next-line import/extensions,import/no-unresolved
import Greetings from './Greetings'
import TsCounter from './TsCounter'

// eslint-disable-next-line react/function-component-definition
const TypeApp: React.FC = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`)
    }
    return (
        <>
            <Greetings name="Hello" onClick={onClick} />

            <TsCounter />
        </>
    )
}

export default TypeApp
