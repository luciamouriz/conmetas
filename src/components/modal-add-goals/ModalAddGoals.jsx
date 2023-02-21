import { useState } from "react"
import { ButtonAccept } from "../buttons/accept/ButtonAccept"
import { ButtonBack } from "../buttons/back/ButtonBack"
import { ComboBox } from "../combobox/ComboBox"
import { Input } from "../inputs/Input"
import { InputOnlyNumbers } from "../inputs/InputOnlyNumbers"
import { InputTime } from "../inputs/InputTime"
import { Radio } from "../inputs/Radio"

export const ModalAddGoals = ({ day, month, year, back }) => {

    const [inputHour, setInputHour] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputRadio, setInputRadio] = useState('l');
    const [checked, setChecked] = useState(true);
    const numMonth = (Number(month) + 1).toString().padStart(2, "0");

    const handleInputChangeHora = (value) => {
        setInputHour(value);
    }

    const handleInputChangeDesc = (value) => {
        setInputDesc(value);
    }
    const handleRadioChangeRadio = (value) => {
        setInputRadio(value);
        if (checked == true) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }

    return (

        <div className="form">
            <div className="radios">
                <Radio value={"l"} label={'Objetivo a largo plazo'} onChange={handleRadioChangeRadio} checked={checked} />
                <Radio value={"c"} label={'Objetivo a corto plazo'} onChange={handleRadioChangeRadio} />
            </div>
            {inputRadio == "c" ?
                <>
                    <div className="inputs-short-goals">
                        <div className="inputs-time-goals">
                            <label>Hora </label>
                            <InputTime onChange={handleInputChangeHora} />
                            <span> a </span>
                            <InputTime onChange={handleInputChangeHora} /> 
                        </div>
                        <div>
                            <label>Nombre </label>
                            <Input onChange={handleInputChangeDesc} />
                        </div>
                        <div>
                            <label>Depende de </label>
                            <ComboBox />
                        </div>
                    </div>
                    <div className="buttons-back-accept">
                        <ButtonBack back={back} />
                        <ButtonAccept date={year + "-" + numMonth + "-" + day.toString().padStart(2, "0")} radio={inputRadio} hour={inputHour} name={inputDesc} />
                    </div>
                </>
                : <>
                    <div>
                        <label>Nombre </label>
                        <Input onChange={handleInputChangeDesc} />
                    </div>
                    <div className="buttons-back-accept">
                        <ButtonBack back={back} />
                        <ButtonAccept date={year + "-" + numMonth + "-" + day.toString().padStart(2, "0")} radio={inputRadio} hour={inputHour} name={inputDesc} />
                    </div>
                </>}
        </div>




    )
}
