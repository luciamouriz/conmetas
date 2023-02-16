
export const ModalGoals = () => {
    return (
        <div className='modal-goals'>
            <form>

                <input type="radio" />
                <label>Objetivo a largo plazo</label>
                <input type="radio" />
                <label>Objetivo a corto plazo</label>
                <div className="data-goals">
                    <div>
                        <label>Hora</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Depende de</label>
                        <input type="combobox" />
                    </div>
                </div>
            </form>


        </div>
    )
}
