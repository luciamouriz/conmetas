import React, {  useState } from 'react'
import { ModalAddGoals } from '../modal-add-goals/ModalAddGoals';

export const ModalAdd = () => {


    const [showComponent, setShowComponent] = useState(false);


    const handleshowAddGoals = event => {
        setShowComponent(true)
    }

    const handleshowAdd = event => {
        setShowComponent(false)
    }


    return (

        <div className='modal-add'>
            {!showComponent && <div className='buttons'>
                <button onClick={handleshowAddGoals}>OBJETIVO</button>
                <button>ACTIVIDAD</button>
                <button>PROYECTO</button>
            </div>}
            {showComponent && <ModalAddGoals back={handleshowAdd}/>}

        </div>


    )
}
