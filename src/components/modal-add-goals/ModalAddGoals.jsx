import { useState } from "react"
import { ButtonAccept } from "../buttons/accept/ButtonAccept"
import { ButtonBack } from "../buttons/back/ButtonBack"
import { ComboBox } from "../combobox/ComboBox"
import { Input } from "../inputs/Input"
import { InputOnlyNumbers } from "../inputs/InputOnlyNumbers"
import { Radio } from "../inputs/Radio"

export const ModalAddGoals = ({ day, month, year, back }) => {

    const [inputHour, setInputHour] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputRadio, setInputRadio] = useState('');

    const handleInputChangeHora = (value) => {
        setInputHour(value);
    }

    const handleInputChangeDesc = (value) => {
        setInputDesc(value);
    }
    const handleRadioChangeRadio = (value) => {
        setInputRadio(value);
    }

    return (
        <>
            <div className="form">
                <div className="radios">
                    <Radio value={"l"} label={'Objetivo a largo plazo'} onChange={handleRadioChangeRadio}/>
                    <Radio value={"c"} label={'Objetivo a corto plazo'} onChange={handleRadioChangeRadio}/>
                </div>
                <div className="data-goals">
                    <div>
                        <label>Hora </label>
                        <InputOnlyNumbers onChange={handleInputChangeHora} />
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
                    <ButtonAccept date={year+month+day} radio={inputRadio} hour={inputHour} name={inputDesc} />
                </div>

            </div>

        </>


    )
}
