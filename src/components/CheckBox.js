function CheckBox({ children, checked, ...rest }) {
    return (
        <div>
            <label htmlFor="customCheckIn">
                <input
                    id="customCheckIn"
                    type="checkbox"
                    checked={checked}
                    {...rest}
                />
                <div>{checked ? '체크됨' : '체크 안됨'}</div>
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox
