
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

        <div className={`container ${showAside ? 'with-aside' : 'without-aside'}`}>
            <Header />
            <Aside close={closeAside} />
            <main>
                <ModalDate />
            </main>
        </div>

    )
}
