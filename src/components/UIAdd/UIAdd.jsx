import React from 'react'

export const UIAdd = ({ day, month, year }) => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    return (
        <div className='uiadd-wrapper'>
            <div className='uiadd-head'>
                <p><span>+</span> Crear</p>
                <p>{day} {months[month]} {year}</p>
            </div>
            <div className='uiadd-buttons'>
                <button>OBJETIVO</button>
                <button>ACTIVIDAD</button>
                <button>PROYECTO</button>
            </div>

        </div>
    )
}
