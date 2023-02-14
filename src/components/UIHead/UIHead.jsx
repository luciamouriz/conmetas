import React from 'react'

export const UIHead = ({day,month,year}) => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return (
        <div className='uiadd-head'>
            <p><span>+</span> Crear</p>
            <p>{day} {months[month]} {year}</p>
        </div>
    )
}
