import { useState } from "react"
import { ModalAdd } from "../../modal-add/ModalAdd";
import { Modal } from "../../modal/Modal";
import { MyContext, MyProvider } from "../../MyProvider";


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
        <>
          <div className="bg-block"></div>
          <MyProvider day={day} month={month} year={year}>
            <Modal classChildren={"add-wrapper"} close={handleClickClose}> {/* close: Cerramos ventana modal */}
              <ModalAdd closeAccept={handleClickClose} /> {/* closeAccept: Cerramos ventana modal despues de aceptar */}
            </Modal>
          </MyProvider>
        </>
      }
    </>
  )
}
