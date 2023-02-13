
import { CardDay } from "./day/CardDay";


export const Calendar = ({ month, year }) => {

    let array = [];
    //Buscar dia de la semana del dia 1 del mes:
    let firstDayMonth = new Date(year, month, "1") //buscar primer día del mes
    let firstWeek = firstDayMonth.getDay() //buscar día de la semana del día 1
    firstWeek--; //adaptar al calendario español (empezar por lunes)
    if (firstWeek == -1) { firstWeek = 6; }

    //buscar fecha para primera celda:
    let dayMonthCell = firstDayMonth.getDate()
    let firstCell = dayMonthCell - firstWeek; //restar días que sobran de la semana
    let startDay = firstDayMonth.setDate(firstCell) //empezar= tiempo UNIX 1ª celda
    let dayMonth = new Date() //convertir en fecha
    dayMonth.setTime(startDay); //diames=fecha primera celda.

    for (let i = 0; i < 42; i++) {

        let myDay = dayMonth.getDate()

        array[i] = myDay;
        //pasar al siguiente día
        myDay = myDay + 1;
        dayMonth.setDate(myDay);

    }



    return (
        <>
            <div className="calendar-wrapper">
                {array.map((day, index) => (
                    <CardDay key={index} day={day} />
                ))}

            </div>
        </>


    )
}