import { useState } from "react"
import { ButtonAccept } from "../buttons/accept/ButtonAccept"
import { ButtonBack } from "../buttons/back/ButtonBack"
import { ComboBox } from "../combobox/ComboBox"
import { Input } from "../inputs/Input"
import { InputTime } from "../inputs/InputTime"
import { Radio } from "../inputs/Radio"

export const ModalAddGoals = ({ day, month, year, back, close }) => {

    const [inputHour1, setInputHour1] = useState('');
    const [inputHour2, setInputHour2] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputRadio, setInputRadio] = useState('l');
    const [selectCombo, setSelectCombo] = useState('');
    const [checked, setChecked] = useState(true);
    const numMonth = (Number(month) + 1).toString().padStart(2, "0");
    



    const handleInputHour1Change = (value) => {
        setInputHour1(value);
    }

    const handleInputHour2Change = (value) => {
        setInputHour2(value);
    }

    const handleInputDescChange = (value) => {
        setInputDesc(value);
        
    }

    const handleSelectComboChange = (value) => {
        setSelectCombo(value);
    }

    const handleRadioChange = (value) => {
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
                <Radio value={"l"} label={'Objetivo a largo plazo'} onChange={handleRadioChange} checked={checked} />
                <Radio value={"c"} label={'Objetivo a corto plazo'} onChange={handleRadioChange} />
            </div>
            {inputRadio == "c" ?
                <>
                    <div className="inputs-short-goals">
                        <div className="inputs-time-goals">
                            <label>Hora &nbsp;</label>
                            <InputTime onChange={handleInputHour1Change} />
                            <span> a </span>
                            <InputTime onChange={handleInputHour2Change} hour={{hour1: inputHour1, hour2: inputHour2}}/> 
                        </div>
                        <div>
                            <label>Descripción <span>*</span></label>
                            <Input onChange={handleInputDescChange}/>
                        </div>
                        <div>
                            <label>Depende de <span>*</span></label>
                            <ComboBox onChange={handleSelectComboChange}/>
                        </div>
                    </div>
                    <div className="buttons-back-accept">
                        <ButtonBack back={back} />
                        <ButtonAccept date={year + "-" + numMonth + "-" + day.toString().padStart(2, "0")} radio={inputRadio} hour={{hour1: inputHour1, hour2: inputHour2}} name={inputDesc} idLTG={selectCombo} close={close}/>
                    </div>
                </>
                : <>
                    <div>
                        <label>Nombre <span>*</span></label>
                        <Input onChange={handleInputDescChange} />
                    </div>
                    <div className="buttons-back-accept">
                        <ButtonBack back={back} />
                        <ButtonAccept date={year + "-" + numMonth + "-" + day.toString().padStart(2, "0")} radio={inputRadio} name={inputDesc} close={close}/>
                    </div>
                </>}
        </div>




    )
}
