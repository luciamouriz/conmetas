import React, { useState } from 'react'

export const InputOnlyLetters = () => {


    const [inputValue, setInputValue] = useState();


    //Solo letras
    const handleInputLetters = event => {
        const pattern = /^[a-zA-Z]+$/;
        const inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }

    };

    const handleChange = event => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <input className="textfield" type="text" value={inputValue} onChange={handleChange} onKeyPress={handleInputLetters} />
        </>
    )
}
