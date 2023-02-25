
import { useEffect } from "react";
import { GetLongGoals } from "../../data/GetLongGoals";
import { GetShortGoals } from "../../data/GetShortGoals";
import { CardDayActive } from "./CardDayActive";
import { CardDayDisabled } from "./CardDayDisabled";
import { CardDayOn } from "./CardDayOn";
import { CardDayRectangle } from "./CardDayRectangle";

/*
 * days es un array (clave, valor) que tendra como clave el mes y el valor el dia
 */
export const CardDayList = ({ days, selectMonth, selectYear }) => {

  let today = new Date()
  let dayToday = today.getDate();
  let monthToday = today.getMonth();

  /**
   * Datos que obtenemos del GET Drupal con AXIOS
   * Metas a corto y largo plazo
   */
  const dataLongGoals = GetLongGoals();
  const dataShortGoals = GetShortGoals();

 
  /**
   * Metodo que devolvera Metas a largo plazo o a corto
   * Nos devuelve el contenido GET, haciendo un filtrado anteriormente para obtener solo las fechas iguales 
   */

  const getDataGoals = (day) => {
    const numMonth = (Number(selectMonth) + 1).toString().padStart(2, "0");
    const numDay = day.toString().padStart(2, "0");

    const filteredLongGoals = dataLongGoals.filter((goal) => {
      return selectYear + "-" + numMonth + "-" + numDay === goal.attributes.field_date_long;
    });
    const filteredShortGoals = dataShortGoals.filter((goal) => {
      return selectYear + "-" + numMonth + "-" + numDay === goal.attributes.field_date;
    });

    const combinedGoals = filteredLongGoals.map((goal1) => {
      return (

        <p>{goal1.attributes.field_description_long}</p>
      )
    })


    const combinedGoals2 = filteredShortGoals.map((goal2) => {
      return (

        <p>{goal2.attributes.field_description}</p>

      )
    })


    return combinedGoals.concat(combinedGoals2);

  };


  return (
    <>
      <div className="calendar-wrapper">
        {days.map((day) => {
          //ON los dias que corresponden al mes. Mes del array con mes seleccionado
          if (day.month == selectMonth) {
            //Si el dia del array es menor que el dia de hoy se pintara en OFF, es decir seran OFF los dias anteriores al de hoy
            //O si el mes es menor que el actual (hoy) 
            if (day.day < dayToday && selectMonth == monthToday || selectMonth < monthToday) {
              return (<CardDayDisabled day={day.day} goals={getDataGoals} />)
            } else {
              //Dia Actual
              if (day.day == dayToday && selectMonth == monthToday) {
                return (<CardDayActive day={day.day} month={selectMonth} year={selectYear} goals={getDataGoals} />)
              } else {
                return (<CardDayOn day={day.day} month={selectMonth} year={selectYear} goals={getDataGoals} />)
              }
            }

          } else {

            //OFF los dias que no entran en el mes
            return (<div className="card-day-off-a">
              <div className="num-day">{day.day}</div>
            </div>)
          }

        }
        )}
      </div>
      <div className="calendar-rectangle">
        <CardDayRectangle days={days} selectMonth={selectMonth} selectYear={selectYear} goals={getDataGoals} />
      </div>
    </>

  )
}
