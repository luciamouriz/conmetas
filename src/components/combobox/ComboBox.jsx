import React from 'react'
import s from "../../assets/arrow-combo.svg"


export const ComboBox = () => {


    return (
        <select className='combobox' style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            backgroundImage: `url(${s})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '96%',
        }}>
            <option className="option1" value="opcion1">-Seleccionar Objetivo a largo plazo -</option>
            <option className="option1" value="opcion2">Opción 2</option>
            <option className="option1" value="opcion3">Opción 3</option>
        </select>
    )
}
