import { ComboBox } from "../combobox/ComboBox"
import { Input } from "../inputs/Input"
import { InputOnlyNumbers } from "../inputs/InputOnlyNumbers"

export const ModalAddGoals = () => {
    return (
        <div className='modal-goals'>
            <form>
                <input type="radio" />
                <label>Objetivo a largo plazo</label>
                <input type="radio" />
                <label>Objetivo a corto plazo</label>
                <div className="data-goals">
                    <div>
                        <label>Hora </label>
                        <InputOnlyNumbers/>
                    </div>
                    <div>
                        <label>Nombre </label>
                        <Input/>
                    </div>
                    <div>
                        <label>Depende de </label>
                        <ComboBox/>
                    </div>
                </div>
            </form>
        </div>
    )
}
