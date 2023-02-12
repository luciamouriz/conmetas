import { ButtonAdd } from "../../buttons/add/ButtonAdd"

export const Day = ({day}) => {
  return (
    <div className="card-day">
        <div className="num-day">{day}</div>
        <ButtonAdd/>
    </div>
  )
}
