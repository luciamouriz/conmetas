

import { ButtonAddDisabled } from "../../buttons/add/ButtonAddDisabled";

export const CardDayDisabled = ({ day, goals }) => {



  return (
    <>
      <div className="card-day-off">
        <div className="num-day">{day}</div>
        <ButtonAddDisabled />
        <div className="data">
        {goals(day)}
        </div>
      </div>
    </>

  )
}
