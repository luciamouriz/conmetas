import { useRef } from "react";
import arrow from "../../assets/arrow-combo.svg"
import { GetLongGoals } from '../data/GetLongGoals'


export const ComboBox = ({ onChange }) => {

    let data = GetLongGoals();
    const comboRef = useRef(null)


    const handleChange = event => {
        onChange(comboRef.current.value)
    }

    const handleClick = event => {

        if (comboRef.current.value === "0") {
            comboRef.current.classList.add('combobox-error')
        } else {
            comboRef.current.classList.remove('combobox-error')
        }
    }

    return (
        <select ref={comboRef} onClick={handleClick} onChange={handleChange} className='combobox' style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            backgroundImage: `url(${arrow})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '96%',
        }}>
            <option value="0">-Seleccionar Objetivo a largo plazo -</option>
            {data.map((data, index) =>
                <option key={index} value={data.id}>{data.attributes.field_description_long}</option>
            )}

        </select>
    )
}
