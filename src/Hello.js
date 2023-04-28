import './Hello.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Hello({ color, name, isSpecial }) {
    const varName = 'react'
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem',
    }
    return (
        <>
            {/* 주석 작성 */}
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요{name}
            </div>
            <div style={style}>{varName}</div>
            <div className="gray-box" />
        </>
    )
}

Hello.defaultProps = {
    color: 'pink',
    name: 'default',
}

Hello.propsTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
}
export default Hello
