
import { AddGoals } from '../../data/AddGoals';

export const ButtonAccept = ({ date, radio, hour, name }) => {

    const handleAddGoals = () => {
        AddGoals(date, radio, hour, name)
       
       
    }


    return (

        <button onClick={handleAddGoals} className="button-accept">Aceptar</button>
        
    )
}
