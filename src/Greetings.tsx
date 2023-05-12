import React from 'react'

type GreetingsProps = {
    name: string
    // eslint-disable-next-line react/require-default-props
    mark: string
    // eslint-disable-next-line react/require-default-props
    optional?: string
    onClick: (name: string) => void // 아무것도 리턴하지 않는 함수
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name)
    return (
        <div>
            Hello,{name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button type="button" onClick={handleClick}>
                    Click Me
                </button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    mark: '!',
}

export default Greetings
