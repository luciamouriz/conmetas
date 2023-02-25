import { useState, useEffect } from 'react';
import axios from 'axios';


export const GetShortGoals = () => {
    const [goals, setGoals] = useState([]);

    /*Envolvemos la llamada GET dentro de un useEffect para que cuando añadamos con el boton Aceptar 
        se actualize directamente en pantalla*/
    useEffect(() => {
        axios.get('http://localhost:8080/install-dir/web/jsonapi/node/short_term_goals')
            .then(response => setGoals(response.data.data));
    }, [goals]);

    return goals;
}
