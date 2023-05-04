import Button from './components/Button'
import Box from './components/Box'
import CheckBox from './components/CheckBox'
import { useState } from 'react'
import styled, { css } from 'styled-components'

function CssTest() {
    const [check, setCheck] = useState(false)
    const onChange = (e) => {
        setCheck(e.target.checked)
    }

    const Circle = styled.div`
        width: 5rem;
        height: 5rem;
        background: ${(props) => props.color || 'black'};
        border-radius: 50%;

        ${(props) =>
            props.huge &&
            css`
                width: 10rem;
                height: 10rem;
            `}
    `

    return (
        <>
            <div className="buttons">
                <Button size="large" onClick={() => console.log('Clicked!')}>
                    BUTTON
                </Button>
                <Button>BUTTON</Button>
                <Button size="small">BUTTON</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray">
                    BUTTON
                </Button>
                <Button color="gray">BUTTON</Button>
                <Button size="small" color="gray">
                    BUTTON
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="pink">
                    BUTTON
                </Button>
                <Button color="pink">BUTTON</Button>
                <Button size="small" color="pink">
                    BUTTON
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="blue" outline>
                    BUTTON
                </Button>
                <Button color="gray" outline>
                    BUTTON
                </Button>
                <Button size="small" color="pink" outline>
                    BUTTON
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" fullWidth>
                    BUTTON
                </Button>
                <Button size="large" fullWidth color="gray">
                    BUTTON
                </Button>
                <Button size="large" fullWidth color="pink">
                    BUTTON
                </Button>
            </div>
            <div className="boxs">
                <Box>Box</Box>
            </div>
            <div className="checkboxes">
                <CheckBox onChange={onChange} checked={check}>
                    다음 약관에 모두 동의
                </CheckBox>
                <p>
                    <b>check: </b>
                    {check ? 'true' : 'false'}
                </p>
            </div>
            <div className="circles">
                <Circle color="blue" huge />
            </div>
        </>
    )
}

export default CssTest
