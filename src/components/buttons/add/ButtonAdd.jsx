import { useState } from "react"
import { UIHeadAdd } from "../../UIHeadAdd/UIHeadAdd";
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
      {showUIHeadAdd && <UIHeadAdd day={idDay} month={month} year={year} clickClose={handleClickClose} />}

    </>
  )
}
