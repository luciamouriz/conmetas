
import { AddGoals } from '../../data/AddGoals';

export const ButtonAccept = ({ date, radio, hour, name, idLTG, close }) => {
 
    const handleAddGoals = () => {
        AddGoals(date, radio, hour, name, idLTG)
        close()
    }


    return (
        <button onClick={handleAddGoals} className="button-accept">Aceptar</button>
    )
}
