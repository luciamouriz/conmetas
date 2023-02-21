import { useState } from "react"
import { ButtonAccept } from "../buttons/accept/ButtonAccept"
import { ButtonBack } from "../buttons/back/ButtonBack"
import { ComboBox } from "../combobox/ComboBox"
import { Input } from "../inputs/Input"
import { InputTime } from "../inputs/InputTime"
import { Radio } from "../inputs/Radio"

export const ModalAddGoals = ({ day, month, year, back }) => {

    const [inputHour1, setInputHour1] = useState('');
    const [inputHour2, setInputHour2] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputRadio, setInputRadio] = useState('l');
    const [checked, setChecked] = useState(true);
    const numMonth = (Number(month) + 1).toString().padStart(2, "0");

    const handleInputChangeHora1 = (value) => {
        setInputHour1(value);
    }
    const handleInputChangeHora2 = (value) => {
        setInputHour2(value);
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
                            <InputTime onChange={handleInputChangeHora1} />
                            <span> a </span>
                            <InputTime onChange={handleInputChangeHora2} /> 
                        </div>
                        <div>
                            <label>Descripción </label>
                            <Input onChange={handleInputChangeDesc} />
                        </div>
                        <div>
                            <label>Depende de </label>
                            <ComboBox />
                        </div>
                    </div>
                    <div className="buttons-back-accept">
                        <ButtonBack back={back} />
                        <ButtonAccept date={year + "-" + numMonth + "-" + day.toString().padStart(2, "0")} radio={inputRadio} hour={{hour1: inputHour1, hour2: inputHour2}} name={inputDesc} />
                    </div>
                </>
                : <>
                    <div>
                        <label>Nombre </label>
                        <Input onChange={handleInputChangeDesc} />
                    </div>
                    <div className="buttons-back-accept">
                        <ButtonBack back={back} />
                        <ButtonAccept date={year + "-" + numMonth + "-" + day.toString().padStart(2, "0")} radio={inputRadio} hour={{hour1: inputHour1, hour2: inputHour2}} name={inputDesc} />
                    </div>
                </>}
        </div>




    )
}
