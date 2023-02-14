import React, { useState } from 'react'
import { UIGoals } from '../UIGoals/UIGoals';
import { UIHead } from '../UIHead/UIHead'

export const UIAdd = ({ day, month, year }) => {


    const [showUI, setshowUI] = useState(false);

    const handleshowUI = event => {
        setshowUI(true)
    }


    return (
        <div className='uiadd-wrapper'>
            <UIHead day={day} month={month} year={year} />
            {!showUI && <div className='uiadd-buttons'>
                <button onClick={handleshowUI}>OBJETIVO</button>
                <button>ACTIVIDAD</button>
                <button>PROYECTO</button>
            </div>}
            {showUI && <UIGoals />}

        </div>
    )
}
