import { useState, useEffect } from 'react';
import axios from 'axios';


export const GetLongGoals = () => {
    const [goals, setGoals] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/install-dir/web/jsonapi/node/long_term_goals')
            .then(response => setGoals(response.data.data));
    }, []);

 
    return goals;
}
