
import { useState } from "react";
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { ModalDate } from "./components/modal-date/ModalDate";

export default function App() {
    const [showAside, setShowAside] = useState(true);

    const closeAside = () => {
        if(showAside == true){
            setShowAside(false)
        }else{
            setShowAside(true)
        }
        
    }

    return (
        /**
         * Al cerrar el aside el contenedor se cambiara de formato grid para que ocupe toda la pantalla.
         * Por eso le pasamos la funcion closeAside, para que cuando demos click al boton de cerrar y abrir aside ,se actualize el showAside 
         * y a la vez el contenedor grid
         */
        <div className={`container ${showAside ? 'with-aside' : 'without-aside'}`}>
            <Header />
            <Aside close={closeAside} />
            <main>
                <ModalDate />
            </main>
        </div>

    )
}
