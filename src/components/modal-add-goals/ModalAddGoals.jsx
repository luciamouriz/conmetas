import { ButtonAccept } from "../buttons/accept/ButtonAccept"
import { ButtonBack } from "../buttons/back/ButtonBack"
import { ComboBox } from "../combobox/ComboBox"
import { Input } from "../inputs/Input"
import { InputOnlyNumbers } from "../inputs/InputOnlyNumbers"
import { Radio } from "../inputs/Radio"

export const ModalAddGoals = () => {
    return (
        <>
            <form>
                <div className="radios">
                    <Radio id={"largo"} />
                    <label>Objetivo a largo plazo</label>
                    <Radio id={"corto"} />
                    <label>Objetivo a corto plazo</label>
                </div>
                <div className="data-goals">
                    <div>
                        <label>Hora </label>
                        <InputOnlyNumbers />
                    </div>
                    <div>
                        <label>Nombre </label>
                        <Input />
                    </div>
                    <div>
                        <label>Depende de </label>
                        <ComboBox />
                    </div>
                </div>
                <div className="buttons-back-accept">
                    <ButtonBack />
                    <ButtonAccept />
                </div>

            </form>

        </>


    )
}
