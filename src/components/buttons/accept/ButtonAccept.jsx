
import { AddGoals } from '../../data/AddGoals';

export const ButtonAccept = (props) => {

    return (
        <button onClick={AddGoals(props.radio, props.hour, props.name)} className="button-accept">Aceptar</button>
    )
}
