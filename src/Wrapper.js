// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    }
    return <div style={style}>{children}</div>
}

//
// Wrapper.propTypes = {
//     children: PropTypes.arrayOf(PropTypes.element),
// }
//
// Wrapper.defaultProps = {
//     children: <Hello />,
// }

export default Wrapper
