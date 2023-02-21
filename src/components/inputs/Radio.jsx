
export const Radio = ({ value, label, onChange, checked }) => {

    
    const handleRadioChange = event => {
        onChange(value)
    }

    return (
        <>
            <input className="radio" type="radio" id={value} value={value} name="radio" onChange={handleRadioChange} checked={checked} />
            <label htmlFor={value}>{label}</label>
        </>
    )
}
