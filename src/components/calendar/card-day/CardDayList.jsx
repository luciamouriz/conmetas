
import { GetGoals } from "../../data/GetGoals";
import { CardDayActive } from "./CardDayActive";
import { CardDayDisabled } from "./CardDayDisabled";
import { CardDayOn } from "./CardDayOn";

/**
 * 
 * days es un array (clave, valor) que tendra como clave el mes y el valor el dia
 */
export const CardDayList = ({ days, selectMonth, selectYear }) => {

  let today = new Date()
  let dayToday = today.getDate();
  let monthToday = today.getMonth();

  let list = GetGoals();

  const getArticle = (day) => {
    const numMonth = (Number(selectMonth) + 1).toString().padStart(2, "0");
    const numDay = day.toString().padStart(2, "0");

    const filteredGoals = list.filter((goal) => {
        return selectYear + "-" + numMonth + "-" + numDay === goal.attributes.field_fecha;
      
    });

    return filteredGoals.map((goal) => {
      return <p>{goal.attributes.field_descripcion}</p>;
    });

  };


  return (
    <>

      {days.map((day) => {
        //ON los dias que corresponden al mes. Mes del array con mes seleccionado
        if (day.month == selectMonth) {
          //Si el dia del array es menor que el dia de hoy se pintara en OFF, es decir seran OFF los dias anteriores al de hoy
          //O si el mes es menor que el actual (hoy) 
          if (day.day < dayToday && selectMonth == monthToday || selectMonth < monthToday) {
            return (<CardDayDisabled day={day.day} goals={getArticle} />)
          } else {
            //Dia Actual
            if (day.day == dayToday && selectMonth == monthToday) {
              return (<CardDayActive day={day.day} month={selectMonth} year={selectYear} goals={getArticle} />)
            } else {
              return (<CardDayOn day={day.day} month={selectMonth} year={selectYear} goals={getArticle} />)
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
