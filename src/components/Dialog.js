import styled, { css, keyframes } from 'styled-components'
import StyledButton from './StyledButton'
import { useEffect, useState } from 'react'

const fadeIn = keyframes`
from{
  opacity: 0;
}
  to{
    opacity: 1;
  }

`
const fadeOut = keyframes`

from{
  opacity: 1;
}
  to{
    opacity: 0;
  }
`

const slideUp = keyframes`
    from{
      transform: translateY(200px);
    }
  to{
    transform: translateY(0px);
  }
`
const slideDown = keyframes`
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(200px);
  }
`

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${(props) =>
        props.disapper &&
        css`
            animation-name: ${fadeOut};
        `}
`

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${(props) =>
        props.disappear &&
        css`
            animation-name: ${slideDown};
        `}
`

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
`

const ShortMarginButton = styled(StyledButton)`
    & + & {
        margin-left: 0.5rem;
    }
`

function Dialog({
    title,
    children,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    visible,
}) {
    const [animate, setAnimate] = useState(false)
    const [localVisible, setLocalVisible] = useState(visible)
    // animate-> 현재 트랜지션 효과를 보여주고 있는 중이라는 상태를 의미
    // localVisible -> 실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 값
    useEffect(() => {
        // visible 값이 true->false가 되는 것을 감지
        if (localVisible && !visible) {
            setAnimate(true)
            setTimeout(() => setAnimate(false), 250) // 250ms 이후 false로 바꿈
        }
        setLocalVisible(visible)
    }, [localVisible, visible])

    if (!animate && !localVisible) return null
    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onCancel}>
                        {cancelText}
                    </ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>
                        {confirmText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    )
}

Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소',
}

export default Dialog
