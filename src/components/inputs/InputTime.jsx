import { useState } from "react";

export const InputTime = ({ onChange }) => {


    const [inputValue, setInputValue] = useState('');



    const handleChange = event => {
        setInputValue(event.target.value);
        onChange(inputValue)
    }

    return (
        <>
            <input className="input-time" type="time" onChange={handleChange} />
        </>
    )
}