import { useState, useEffect } from 'react';
import axios from 'axios';


export const GetShortGoals = () => {
    const [goals, setGoals] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/install-dir/web/jsonapi/node/short_term_goals')
            .then(response => setGoals(response.data.data));
    }, []);
    
    return goals;
}
