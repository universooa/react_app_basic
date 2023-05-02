import LifeCycleSample from './LifeCycleSample'
import { useState } from 'react'

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function RandomColors() {
    const [color, setColor] = useState('#000000')
    const [visible, setVisible] = useState(true)

    const onClick = () => {
        setColor(getRandomColor())
    }
    const onToggle = () => {
        setVisible(!visible)
    }
    return (
        <>
            <button type="button" onClick={onClick}>
                랜덤 색상
            </button>
            <button type="button" onClick={onToggle}>
                토글
            </button>
            {visible && <LifeCycleSample color={color} />}
        </>
    )
}

export default RandomColors
