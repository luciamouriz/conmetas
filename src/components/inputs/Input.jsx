import { useState } from "react";

export const Input = (props) => {


    const [inputValue, setInputValue] = useState('');

    const handleChange = event => {
        setInputValue(event.target.value);
        props.onChange(inputValue)
    }

    return (
        <>
            <input className="textfield" type="text" onChange={handleChange} />
        </>
    )
}
