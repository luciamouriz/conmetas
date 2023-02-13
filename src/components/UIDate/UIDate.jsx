import { useRef, useState } from "react"
import { Calendar } from "../calendar/Calendar"

export const UIDate = () => {


  let today = new Date();
  let monthToday = today.getMonth();
  let yearToday = today.getFullYear();
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


  const [showCalendar, setShowCalendar] = useState(false);
  const [showUIDate, setShowUIDate] = useState(false);
  const [inputValue, setInputValue] = useState(yearToday);
  const [id, setID] = useState('');
  const validation = useRef(null)


  const handleInputChange = event => {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.target.value.length >= 5) {
      event.preventDefault();
    } else {
      setInputValue(event.target.value);
    }

  };

  const handleClickMonth = event => {
    if (inputValue.length === 0 || Number(inputValue) < yearToday || Number(inputValue) > 2119) {
      validation.current.innerText = "Escribe un año entre año actual y 2119"
    } else {
      setID(event.currentTarget.id)
      setShowCalendar(true)
      setShowUIDate(false)
    }
  }


  const handleClickUIDate = () => {
    setShowUIDate(true)
  }


  return (
    <div className="uidate-wrapper">
      <p>CALENDARIO / <button onClick={handleClickUIDate}>{id != "" ? `${months[id]} ${inputValue}` : `${months[monthToday]} ${yearToday}`}</button></p>
      {showUIDate &&
        <div className="select-date">
          <p ref={validation}>Selecciona una fecha</p>
          <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleInputChange} placeholder="Año"/>

          <div className="buttons-months">
            {months.map((month, index) => (
              <button id={index} onClick={handleClickMonth}>{month}</button>
            ))}
          </div>
        </div>

      }
      {showCalendar == true && inputValue != "" ? <Calendar month={id} year={inputValue} /> : <Calendar month={monthToday} year={yearToday} />}
    </div>

  )
}
