
import { ButtonAdd } from "../../buttons/add/ButtonAdd"

export const CardDayActive = ({ day, selectMonth, selectYear, goals }) => {


  return (
    <>
      <div className="card-day-on active">
        <div className="num-day">{day}</div>
        <ButtonAdd day={day} month={selectMonth} year={selectYear} />
        <div className="data">
          {goals(day)}
        </div>
      </div>
    </>

  )
}
