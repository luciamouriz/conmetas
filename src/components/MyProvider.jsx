import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const contextValue = useMemo(() => ({
        selectedDay,
        setSelectedDay,
        day: props.day,
        month: props.month,
        year: props.year
    }), [selectedDay, props.day, props.month, props.year]);

    return <MyContext.Provider value={contextValue} {...props} />;
}


export { MyContext, MyProvider };