import { useState } from "react"
import { ModalAdd } from "../../modal-add/ModalAdd";
import { ModalHeader } from "../../modal-header/ModalHeader";
let idDay;

export const ButtonAdd = ({ day, month, year }) => {

  const handleClickAdd = event => {

    setshowUIHeadAdd(true)
    idDay = event.currentTarget.id;
  }

  const [showUIHeadAdd, setshowUIHeadAdd] = useState();

  function handleClickClose() {
    setshowUIHeadAdd(false);
  }

  return (
    <>

      <button className="button-add" onClick={handleClickAdd} id={day}>+</button>
      {showUIHeadAdd &&
        <div className="add-wrapper">
          <ModalHeader day={idDay} month={month} year={year} clickClose={handleClickClose} />
          <ModalAdd />
        </div>}

    </>
  )
}
