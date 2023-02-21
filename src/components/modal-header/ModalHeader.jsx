import iconadd from "../../assets/add.svg";

export const ModalHeader = ({ day, month, year, clickClose }) => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    return (
        <>
            <div className='modal-header'>
                <div className="icon-add"><img src={iconadd} alt="Add" /><p>Crear</p></div>
                <p>{day} {months[month]} {year}</p>
                <button className="close-modalAdd" onClick={clickClose}>X</button>
            </div>

        </>
    )
}
