
import { GetLongGoals } from "../../data/GetLongGoals";
import { GetShortGoals } from "../../data/GetShortGoals";
import { CardDayActive } from "./CardDayActive";
import { CardDayDisabled } from "./CardDayDisabled";
import { CardDayOn } from "./CardDayOn";

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
   * Metodo que devolvera dependiendo del dia en que te encuentres si tiene Metas a largo plazo o a corto
   * Nos devuelve el contenido GET de una o de otra, haciendo un filtrado anteriormente para obtener solo las fechas iguales 
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

    if (filteredLongGoals.length > 0) {
      return filteredLongGoals.map((goal) => {
        return <p>{goal.attributes.field_description_long}</p>;
      });
  
    }

    if (filteredShortGoals.length > 0) {
      return filteredShortGoals.map((goal) => {
        return <p>{goal.attributes.field_description}</p>;
      });
    }

  };


  return (
    <>

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

    </>

  )
}
