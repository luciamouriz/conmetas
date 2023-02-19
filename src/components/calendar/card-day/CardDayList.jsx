
import { GoalsList } from "../../lists/GoalsList";
import { CardDayActive } from "./CardDayActive";
import { CardDayDisabled } from "./CardDayDisabled";
import { CardDayOn } from "./CardDayOn";

export const CardDayList = ({ days, selectMonth, selectYear }) => {

  let today = new Date()
  let dayToday = today.getDate();
  let monthToday = today.getMonth();

  let list = GoalsList();

  const getArticle = (day) => {
    const numMonth = Number(selectMonth) + 1;
    const filteredGoals = list.filter((goal) => {
      return selectYear + "-0" + numMonth + "-" + day === goal.attributes.field_fecha;
    });

    return filteredGoals.map((goal) => {
      return <p>{goal.attributes.field_descripcion}</p>;
    });
  };




  return (
    <>

      {days.map((day) => {
        //Que el mes anterior se pinte de gris , ya a pasado
        if (selectMonth < monthToday) {
          return (<div className="card-day-off">
            <div className="num-day">{day.day}</div>
          </div>)
        } else {
          //ON los dias que corresponden al mes. Mes del array con mes seleccionado
          if (day.month == selectMonth) {
            //Si el dia del array es menor que el dia de hoy se pintara en OFF, es decir seran OFF los dias anteriores al de hoy
            if (day.day < dayToday && selectMonth == monthToday) {
              return (<CardDayDisabled day={day.day} goals={getArticle}/>)
            } else {
              if (day.day == dayToday && selectMonth == monthToday) {
                return (<CardDayActive day={day.day} month={selectMonth} year={selectYear} goals={getArticle} />)
              } else {
                return (<CardDayOn day={day.day} month={selectMonth} year={selectYear} goals={getArticle}/>)
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
