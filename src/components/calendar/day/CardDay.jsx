
import { ButtonAdd } from "../../buttons/add/ButtonAdd"

export const CardDay = ({ days, month }) => {

  let today = new Date()
  let indexDays;


  /*Si el dia de hoy corresponde se le añade un color diferente para saber que ese es el dia de hoy en el calendario*/

  return (
    <>




      {

        days.map((day, index) => {
          if (today.getMonth() >= month) {
            if (today.getDate() == day && today.getMonth() == month) {
              indexDays = index;

              return (<div className="card-day-on active">
                <div className="num-day">{day}</div>
                <ButtonAdd />
              </div>)
            }

            if (indexDays < index) {

              return (<div className="card-day-on">
                <div className="num-day">{day}</div>
                <ButtonAdd />
              </div>)

            } else {

              return (<div className="card-day-off">
                <div className="num-day">{day}</div>
                <ButtonAdd />
              </div>)
            }
          } else {
            return (<div className="card-day-off">
              <div className="num-day">{day}</div>
              <ButtonAdd />
            </div>)
          }
        })}

    </>

  )
}
