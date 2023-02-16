import React, {  useState } from 'react'
import { ModalAddGoals } from '../modal-add-goals/ModalAddGoals';

export const ModalAdd = () => {


    const [showUI, setshowUI] = useState(false);


    const handleshowUI = event => {
        setshowUI(true)
    }

   
    return (

        <div className='modal-add'>
            {!showUI && <div className='buttons'>
                <button onClick={handleshowUI}>OBJETIVO</button>
                <button>ACTIVIDAD</button>
                <button>PROYECTO</button>
            </div>}
            {showUI && <ModalAddGoals />}

        </div>


    )
}
