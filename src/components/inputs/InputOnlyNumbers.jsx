import { useState } from "react";

export const InputOnlyNumbers = (props) => {


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
        props.onChange(inputValue)
    }

    return (
        <>
            <input className="textfield" type="text" onChange={handleChange} onKeyPress={handleInputNumbers} />
        </>
    )
}
