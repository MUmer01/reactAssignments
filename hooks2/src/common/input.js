const Input = (props) => {

    const change = (e) => {
        props.onChange(e.target.value)
    }

    return (
        <input 
            {...props}
            type={props.type || 'text'}
            onChange={change}
        />
    )
}

export default Input