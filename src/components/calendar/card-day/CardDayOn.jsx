
import { ButtonAdd } from "../../buttons/add/ButtonAdd";

export const CardDayOn = ({ day, month, year, goals }) => {

  
  return (

    <div className="card-day-on">
      <div className="num-day">{day}</div>
      <ButtonAdd day={day} month={month} year={year} />
      <div className="data">
        {goals(day)}
      </div>
    </div>



  )
}
