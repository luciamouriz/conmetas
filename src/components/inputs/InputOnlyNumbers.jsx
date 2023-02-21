import { useState } from "react";

export const InputOnlyNumbers = ({ onChange }) => {


    const [inputValue, setInputValue] = useState('');

    //Solo numeros
    const handleInputNumbers = event => {
        const pattern = /^[0-9]+$/;
        const inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }

    };



    const handleChange = event => {
        setInputValue(event.target.value);
        onChange(inputValue)
    }

    return (
        <>
            <input className="input" type="text" onChange={handleChange} onKeyPress={handleInputNumbers}/>
        </>
    )
}
