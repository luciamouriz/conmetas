
import { AddGoals } from '../../data/AddGoals';
import randomcolor from 'randomcolor';

export const ButtonAccept = ({ date, radio, hour, name, idLTG, close }) => {

    const handleAddGoals = async () => {

        if (radio == "l" && name == "") {
            return
        }

        if (hour != undefined) {
            if (hour.hour1 == "" && hour.hour2 != "" || name == "" || idLTG == "") {
                return
            }
        }

        const randomColor = randomcolor({
            luminosity: 'light',
            hue: 'random'
        });

        
        await AddGoals(date, radio, hour, name, idLTG, randomColor)
        close() //Al dar aceptar se cerrara la ventana

    }


    return (
        <button onClick={handleAddGoals} className="button-accept">Aceptar</button>
    )
}
