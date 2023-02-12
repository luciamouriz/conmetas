import { Day } from "../day/Day";
import { useState } from "react";


export const GridCalendar = ({days}) => {

  const [showComponent, setShowComponent] = useState(false);

 
  const handleClickUIDate = event => {
    setShowComponent(!showComponent);
  }

  return (
    <>
     {/*  <div>CALENDARIO \ <button onClick={handleClickUIDate}>ENERO</button></div>
      {showComponent && <UIDate/>} */}
      
      <div className="calendar-wrapper">
        {days.map((day, index) => (
          <Day key={index} day={day} />

        ))}

      </div>
    </>
  )
}
