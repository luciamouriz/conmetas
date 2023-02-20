import { useState } from "react";

export const Radio = (props) => {

    const [selectedValue, setSelectedValue] = useState();

    
    const handleRadioChange = event => {
        setSelectedValue(event.target.value);
        props.onChange(selectedValue)
    }
    return (
        <>
            <input className="radio" type="radio" id={props.value} value={props.value} name="radio" onChange={handleRadioChange} />
            <label for={props.value}>{props.label}</label>
        </>
    )
}
