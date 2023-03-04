import { useContext } from "react";
import iconadd from "../../assets/add.svg";
import { MyContext } from "../MyProvider";
export const Modal = ({ children, close }) => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const { day, month, year } = useContext(MyContext);

    return (
        <div className="modal-wrapper">
            <div className='modal-header'>
                <div className="icon-add"><img src={iconadd} alt="Add" /><p>Crear</p></div>
                <p>{day} {months[month]} {year}</p>
                <button className="close-modal-add" onClick={close}>X</button>
            </div>
            {children}
        </div>
    )
}
