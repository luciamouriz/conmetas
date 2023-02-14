import { useState } from "react"
import { UIAdd } from "../../UIAdd/UIAdd";
let idDay ;

export const ButtonAdd = ({day , month , year}) => {

  const [showUIAdd, setShowUIAdd] = useState(false)

  const handleClickAdd = event => {
    
      setShowUIAdd(true)
      idDay = event.currentTarget.id;
    
    
    
  }



  return (
    <>

      <button className="button-add" onClick={handleClickAdd} id={day}>+</button>
      {showUIAdd && <UIAdd day={idDay} month={month} year={year}/>}
    </>
  )
}
