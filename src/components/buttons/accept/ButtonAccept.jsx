
import { AddGoals } from '../../data/AddGoals';
import randomcolor from 'randomcolor';

export const ButtonAccept = ({ date, radio, hour, name, idLTG, close }) => {


    const handleAddGoals = () => {
        if (hour.hour1 == "" && hour.hour2 != "") {
            //mensaje error
        } else {
            const randomColor = randomcolor({
                luminosity: 'light',
                hue: 'random'
            });
            AddGoals(date, radio, hour, name, idLTG, randomColor)
            close()
        }
    }


    return (
        <button onClick={handleAddGoals} className="button-accept">Aceptar</button>
    )
}
