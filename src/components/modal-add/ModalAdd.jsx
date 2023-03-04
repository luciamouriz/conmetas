import React, { useState } from 'react'
import { useContext } from 'react';
import { ModalAddGoals } from '../modal-add-goals/ModalAddGoals';
import { MyContext, MyProvider } from '../MyProvider';

export const ModalAdd = ({ closeAccept }) => {


    const [showComponent, setShowComponent] = useState(false);
    const { day, month, year } = useContext(MyContext);

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
            {showComponent && <MyProvider day={day} month={month} year={year}>
                <ModalAddGoals back={handleshowAdd} closeAccept={closeAccept} />
            </MyProvider>}

        </div>


    )
}
