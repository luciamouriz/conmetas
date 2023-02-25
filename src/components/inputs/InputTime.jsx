
export const InputTime = ({ onChange }) => {


    const handleChange = event => {
        onChange(event.target.value)
    }

    
    return (

        <input className="input-time" type="time" onChange={handleChange} />

    )
}