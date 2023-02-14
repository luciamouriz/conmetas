import React from 'react'

export const UIGoals = () => {
    return (
        <div className='uigoals-wrapper'>
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
