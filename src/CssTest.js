import Button from './components/Button'
import Box from './components/Box'
import CheckBox from './components/CheckBox'
import { useState } from 'react'

function CssTest() {
    const [check, setCheck] = useState(false)
    const onChange = (e) => {
        setCheck(e.target.checked)
    }

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
        </>
    )
}

export default CssTest
