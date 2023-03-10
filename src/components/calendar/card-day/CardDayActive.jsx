
import { ButtonAdd } from "../../buttons/add/ButtonAdd"
import { ButtonSeeMore } from "../../buttons/see-more/ButtonSeeMore"

export const CardDayActive = ({ day, month, year, goals }) => {

  return (
    <>
      <div className="card-day-on active">
        <div className="num-day">{day}</div>
        <ButtonAdd day={day} month={month} year={year} />
        <div className="data">
          {goals(day)}
        </div>
        <ButtonSeeMore day={day}/>
      </div>
    </>

  )
}
