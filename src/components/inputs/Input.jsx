import { useState } from "react";

export const Input = ({ onChange }) => {


    const [inputValue, setInputValue] = useState('');

    const handleChange = event => {
        setInputValue(event.target.value);
        onChange(inputValue)
    }

    return (
        <>
            <input className="input" type="text" onChange={handleChange} />
        </>
    )
}
