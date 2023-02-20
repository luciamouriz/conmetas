import { useState } from "react"
import { ModalAdd } from "../../modal-add/ModalAdd";
import { ModalHeader } from "../../modal-header/ModalHeader";


export const ButtonAdd = ({ day, month, year }) => {

  const [showComponent, setshowComponent] = useState(false);
  const [showModal, setShowModal] = useState([])

  const handleClickClose = () => {
    setshowComponent(false);
  }

  /*Nos aparece la ventana de Modal o Dialog*/
  const handleClickAdd = event => {
    setshowComponent(true)


  }

  /*Al dar click al boton añadir, nos aparece la pantalla modal header y modal Add. Modal Header tendra un props que sera 
  una funcion que podra cerrar la interfaz entera. Cerrara los dos Modal*/
  return (
    <>

      <button className="button-add" onClick={handleClickAdd}>+</button>
      {showComponent &&
        <>
          <div className="bg-block"></div>
          <div className="add-wrapper">
            <ModalHeader day={day} month={month} year={year} clickClose={handleClickClose} />
            <ModalAdd day={day} month={month} year={year} />
          </div>
        </>
      }
    </>
  )
}
