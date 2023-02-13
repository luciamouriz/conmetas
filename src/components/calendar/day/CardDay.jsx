import { ButtonAdd } from "../../buttons/add/ButtonAdd"

export const CardDay = ({day}) => {
  return (
    <div className="card-day">
        <div className="num-day">{day}</div>
        <ButtonAdd/>
    </div>
  )
}
