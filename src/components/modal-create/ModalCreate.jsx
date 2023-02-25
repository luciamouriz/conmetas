import { ModalAdd } from '../modal-add/ModalAdd';
import { ModalHeader } from '../modal-header/ModalHeader';

export const ModalCreate = ({ day, month, year, close }) => {

    /*Añadimos la clase bg-block para añadir un bg en la pagina Objetivos completa
     y que no se pueda pinchar ninguno de los botones */
    return (
        <>
            <div className="bg-block"></div>
            <div className="add-wrapper">
                <ModalHeader day={day} month={month} year={year} clickClose={close} />
                <ModalAdd day={day} month={month} year={year} close={close} />
            </div>
        </>
    )
}
