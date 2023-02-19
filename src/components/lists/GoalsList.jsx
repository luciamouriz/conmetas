import { useState, useEffect } from 'react';
import axios from 'axios';


export const GoalsList = () => {
    const [goals, setGoals] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/install-dir/web/jsonapi/node/objetivo_a_corto_plazo')
            .then(response => setGoals(response.data.data));
    }, []);

   
    return goals;
}
