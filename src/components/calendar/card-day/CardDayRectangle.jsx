import { ButtonAdd } from '../../buttons/add/ButtonAdd';

export const CardDayRectangle = ({ days, selectMonth, selectYear, goals }) => {

    let week = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    const dayWeek = (day, month) => {

        const dayW = new Date(selectYear, month, day);
        return week[dayW.getDay()];
    }

    const getGoals = (day) => {
        return goals(day)
    }
    return (
        <>
            {days.map((day) => (
                <>
                    {getGoals(day.day).length > 0 &&
                        <div className='card-rectangle'>
                            <div className='day'>
                                <p>{dayWeek(day.day, day.month)}</p>
                                <p className='num-day'>{day.day}</p>
                            </div>
                            <div className='data'>
                                {goals(day.day)}
                            </div>
                            <ButtonAdd day={day.day} month={selectMonth} year={selectYear} />
                        </div>
                    } </>
            ))}



        </>
    )
}
