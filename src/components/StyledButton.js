import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color]
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
`
const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
    },
}

const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`

const Button = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    align-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    ${sizeStyles}
    /* 색상 */

    ${colorStyles}

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`

function StyledButton({ children, color, size, ...rest }) {
    return (
        <Button color={color} size={size} {...rest}>
            {children}
        </Button>
    )
}

StyledButton.defaultProps = {
    color: 'blue',
    size: 'medium',
}

export default StyledButton
