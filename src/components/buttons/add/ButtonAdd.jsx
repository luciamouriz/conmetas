import { useState } from "react"
import { ModalCreate } from "../../modal-create/ModalCreate";


export const ButtonAdd = ({ day, month, year }) => {

  const [showComponent, setshowComponent] = useState(false);

  /* Cerramos la ventana ModalCreate*/
  const handleClickClose = () => {
    setshowComponent(false);
  }

  /*Nos aparece la ventana de ModalCreate*/
  const handleClickAdd = event => {
    setshowComponent(true)
  }

  /*Al dar click al boton añadir, nos aparece el ModalCreate. 
  A este le pasamos la funcion cerrar para que desde el ModalHeader lo podamos cerrar
  es decir, el valor de showComponent sera false y no aparecera la ventana*/
  return (
    <>

      <button className="button-add" onClick={handleClickAdd}>+</button>
      {showComponent &&
        <ModalCreate day={day} month={month} year={year} close={handleClickClose}/>
      }
    </>
  )
}
