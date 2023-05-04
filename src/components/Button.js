import './Button.scss'
import classNames from 'classnames'

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return (
        <button
            type="button"
            className={classNames('Button', size, color, {
                outline,
                fullWidth,
            })}
            {...rest}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
}

export default Button
