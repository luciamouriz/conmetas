import { useRef } from "react"

export const InputTime = ({ onChange, hour }) => {


    const inputRef = useRef(null)


    const handleChange = event => {
        onChange(inputRef.current.value)
    }

    const handleClick = event => {
       
        if (hour.hour1 === "" && hour.hour2 != "") {
            inputRef.current.classList.add('input-error')
        } else {
            inputRef.current.classList.remove('input-error')
        }
    }
    
    return (

        <input ref={inputRef} className="input-time" type="time" onChange={handleChange} onClick={handleClick}/>

    )
}