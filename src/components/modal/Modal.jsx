import iconadd from "../../assets/add.svg";

export const Modal = ({ day, month, year, close, children }) => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    return (
        <>
            <div className='modal'>
                <div className="icon-add"><img src={iconadd} alt="Add" /><p>Crear</p></div>
                <p>{day} {months[month]} {year}</p>
                <button className="close-modalAdd" onClick={close}>X</button>
            </div>
            {children}
        </>
    )
}
