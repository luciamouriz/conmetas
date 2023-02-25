
export const Input = ({ onChange }) => {


    const handleChange = event => {
        onChange(event.target.value)
    }

    return (
        <input className="input" type="text" onChange={handleChange} />

    )
}
