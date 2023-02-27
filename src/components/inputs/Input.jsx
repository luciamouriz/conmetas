import { useRef } from "react";

export const Input = ({ onChange }) => {

    const refInput = useRef(null)

    const handleChange = event => {
        onChange(event.target.value)
    }

    return (
        <input ref={refInput} className="input" type="text" onChange={handleChange} />

    )
}
