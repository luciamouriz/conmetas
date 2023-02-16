import { useState } from "react";

export const InputOnlyNumbers = () => {


    const [inputValue, setInputValue] = useState();

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
    }


    return (
        <>
            <input className="textfield" type="text" value={inputValue} onChange={handleChange} onKeyPress={handleInputNumbers} />
        </>
    )
}
