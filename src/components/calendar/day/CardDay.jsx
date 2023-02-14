
import { ButtonAdd } from "../../buttons/add/ButtonAdd"

export const CardDay = ({ days, selectMonth, selectYear }) => {

  let today = new Date()
  let dayToday = today.getDate();
  let monthToday = today.getMonth();

  return (
    <>

      {days.map((day) => {
        //Que el mes anterior se pinte de gris , ya a pasado
        if (selectMonth < monthToday) {
          return (<div className="card-day-off">
            <div className="num-day">{day.day}</div>
            <ButtonAdd day={day.day} month={selectMonth} year={selectYear}/>
          </div>)
        } else {
          //ON los dias que corresponden al mes. Mes del array con mes seleccionado
          if (day.month == selectMonth) {
            //Si el dia del array es menor que el dia de hoy se pintara en OFF, es decir seran OFF los dias anteriores al de hoy
            if (day.day < dayToday && selectMonth == monthToday) {
              return (<div className="card-day-off">
                <div className="num-day">{day.day}</div>
                <ButtonAdd day={day.day} month={selectMonth} year={selectYear}/>
              </div>)
            } else {
              if (day.day == dayToday && selectMonth == monthToday) {
                return (<div className="card-day-on active">
                  <div className="num-day">{day.day}</div>
                  <ButtonAdd day={day.day} month={selectMonth} year={selectYear}/>
                </div>)
              } else {
                return (<div className="card-day-on">
                  <div className="num-day">{day.day}</div>
                  <ButtonAdd day={day.day} month={selectMonth} year={selectYear}/>
                </div>)
              }

            }

          } else {
            //OFF los dias que no entran en el mes
            return (<div className="card-day-off">
              <div className="num-day">{day.day}</div>
            </div>)
          }

        }
      })}

    </>

  )
}
