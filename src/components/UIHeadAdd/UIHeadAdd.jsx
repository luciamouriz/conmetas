import React, { useState } from 'react'
import { UIAdd } from '../UIAdd/UIAdd'
import { UIHead } from '../UIHead/UIHead'

export const UIHeadAdd = ({ day, month, year, clickClose }) => {




    return (

        <>

            <div className="add-wrapper">
                <UIHead day={day} month={month} year={year} clickClose={clickClose} />
                <UIAdd />
            </div>


        </>

    )
}
