import { useRef, useState } from "react"
import { Calendar } from "../calendar/grid/Calendar"


export const UIDate = () => {

  let today = new Date();
  let monthToday = today.getMonth();
  let yearToday = today.getFullYear();


  const [showComponent, setShowComponent] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [id, setID] = useState('');
  const myInput = useRef(null);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleClickMonth = event => {
    /* Array.from(document.getElementsByTagName('button')).map(elem => elem.classList.remove('active'))
    event.currentTarget.classList.add('active'); */
    setID(event.currentTarget.id)
    setShowComponent(true)
  }

  const getMonthText = () =>{
    
  }

  return (
    <>
      <p>CALENDARIO / <button>{(id != "")  ? `${id}` : `${monthToday}`}</button></p>
      <div className="uidate-wrapper" >
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button id={0} onClick={handleClickMonth}>Enero</button>
        <button id={1} onClick={handleClickMonth}>Febrero</button>
        <button id={2} onClick={handleClickMonth}>Marzo</button>
        <button id={3} onClick={handleClickMonth}>Abril</button>
        <button id={4} onClick={handleClickMonth}>Mayo</button>
        <button id={5} onClick={handleClickMonth}>Junio</button>
        <button id={6} onClick={handleClickMonth}>Julio</button>
        <button id={7} onClick={handleClickMonth}>Agosto</button>
        <button id={8} onClick={handleClickMonth}>Septiembre</button>
        <button id={9} onClick={handleClickMonth}>Octubre</button>
        <button id={10} onClick={handleClickMonth}>Noviembre</button>
        <button id={11} onClick={handleClickMonth}>Diciembre</button>
        {showComponent == false && <Calendar month={monthToday} year={yearToday} />}
        {showComponent && <Calendar month={id} year={inputValue} />}
      </div>


    </>

  )
}
