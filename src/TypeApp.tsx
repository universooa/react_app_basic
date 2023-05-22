import React from 'react'
// eslint-disable-next-line import/extensions,import/no-unresolved
import Greetings from './Greetings'
import TsCounter from './TsCounter'
import MyForm from './MyForm'
import ReducerSample from './ReducerSample'

// eslint-disable-next-line react/function-component-definition
const TypeApp: React.FC = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`)
    }
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form)
    }

    return (
        <>
            <Greetings name="Hello" onClick={onClick} />

            <TsCounter />

            <MyForm onSubmit={onSubmit} />

            <ReducerSample />
        </>
    )
}

export default TypeApp
