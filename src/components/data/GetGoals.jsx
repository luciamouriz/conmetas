import { useState, useEffect } from 'react';
import axios from 'axios';


export const GetGoals = () => {
    const [goals, setGoals] = useState([]);

    /*Envolvemos la llamada GET dentro de un useEffect para que cuando añadamos con el boton Aceptar 
    se actualize directamente en pantalla*/
    useEffect(() => {
        axios.get('http://localhost:8080/install-dir/web/goals')
            .then(response => setGoals(response.data));
    }, [goals]);

 
    return goals;
}
