import { useRef } from "react";

export const Input = ({ onChange }) => {

    const inputRef = useRef(null)


    const handleChange = event => {
        if (inputRef.current.value === "") {
            inputRef.current.classList.add('input-error')
        } else {
            inputRef.current.classList.remove('input-error')
        }

        onChange(inputRef.current.value)
    }


    const handleClick = event => {
        if (inputRef.current.value === "") {
            inputRef.current.classList.add('input-error')
        } else {
            inputRef.current.classList.remove('input-error')
        }
    }


    return (
        <input ref={inputRef} className="input" type="text" onChange={handleChange} onClick={handleClick} />

    )
}
