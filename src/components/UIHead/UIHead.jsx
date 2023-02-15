import { useState } from "react";
import iconadd from "../../assets/add.svg";
import { UIHeadAdd } from "../UIHeadAdd/UIHeadAdd";

export const UIHead = ({ day, month, year, clickClose }) => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const [showComponent, setShowComponent] = useState(false)

    /*Pasamos por props show, que es la referencia de la ventana principal para poder cerrarla*/
    const closeUIAdd = event => {
        setShowComponent(false)
    }


    return (
        <>
            <div className='uiadd-head'>
                <div className="icon-add"><img src={iconadd} alt="Add" /><p>Crear</p></div>
                <p>{day} {months[month]} {year}</p>
                <button onClick={clickClose}>X</button>
            </div>

        </>
    )
}
