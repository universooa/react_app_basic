import styled, { css, ThemeProvider } from 'styled-components'
import { darken, lighten } from 'polished'

const Button = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */

    ${(props) => {
        const selected = props.theme.palette[props.color]
        return css`
  background: ${selected};
    &:hover{
      background: ${lighten(0.1, selected)};
    }
    &:active{
      background: ${darken(0.1, selected)};
      }
    }
  `
    }}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`

function StyledButton({ children, ...rest }) {
    return <Button {...rest}>{children}</Button>
}

StyledButton.defaultProps = {
    color: 'blue',
}

export default StyledButton
