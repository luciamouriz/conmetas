import React, { useRef, useState } from 'react'
import { UIGoals } from '../UIGoals/UIGoals';
import { UIHead } from '../UIHead/UIHead'

export const UIAdd = () => {


    const [showUI, setshowUI] = useState(false);


    const handleshowUI = event => {
        setshowUI(true)
    }

   
    return (

        <div className='uiadd-wrapper'>
            {!showUI && <div className='uiadd-buttons'>
                <button onClick={handleshowUI}>OBJETIVO</button>
                <button>ACTIVIDAD</button>
                <button>PROYECTO</button>
            </div>}
            {showUI && <UIGoals />}

        </div>


    )
}
