import { useState } from "react"
import { Calendar } from "../calendar/Calendar"

export const UIDate = () => {


  let today = new Date();
  let monthToday = today.getMonth();
  let yearToday = today.getFullYear();
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


  const [showCalendar, setShowCalendar] = useState(false);
  const [showUIDate, setShowUIDate] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [id, setID] = useState('');


  const handleInputChange = event => {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) || event.target.value.length >= 5) {
      event.preventDefault();
    } else {
      setInputValue(event.target.value);
    }


  };

  const handleClickMonth = event => {
    /* Array.from(document.getElementsByTagName('button')).map(elem => elem.classList.remove('active'))
    event.currentTarget.classList.add('active'); */

    if (inputValue.length === 0) {
      alert("falta el año")
    } else if (Number(inputValue) < yearToday || Number(inputValue) > 2119) {
      alert('Año actual hasta 2119')
    } else {
      setID(event.currentTarget.id)
      setShowCalendar(true)
      setShowUIDate(false)
    }
  }

  const handleClickUIDate = event => {
    setShowUIDate(true)
  }

  return (
    <>
      <p>CALENDARIO / <button onClick={handleClickUIDate}>{id != "" ? months[id] : months[monthToday]}</button></p>

      {showUIDate &&
        <div className="uidate-wrapper">
          <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleInputChange} />
          {months.map((month, index) => (
            <button id={index} onClick={handleClickMonth}>{month}</button>
          ))}

        </div>
      }

      {showCalendar == true && inputValue != "" ? <Calendar month={id} year={inputValue} /> : <Calendar month={monthToday} year={yearToday} />}
    </>

  )
}
