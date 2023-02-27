import arrow from "../../assets/arrow-combo.svg"
import { GetLongGoals } from '../data/GetLongGoals'


export const ComboBox = ({ onChange }) => {

    let data = GetLongGoals();

    const handleChange = event => {
        onChange(event.target.value)
    }


    return (
        <select onChange={handleChange} className='combobox' style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            backgroundImage: `url(${arrow})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '96%',
        }}>
            <option value="0">-Seleccionar Objetivo a largo plazo -</option>
            {data.map((data, index) =>
                <option key={index} value={data.id}>{data.attributes.field_description_long}</option>
            )}

        </select>
    )
}
