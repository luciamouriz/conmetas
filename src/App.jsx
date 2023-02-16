
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { ModalDate } from "./components/modal-date/ModalDate";

export default function App() {



    return (
        <>
            <Header />
            <Aside />
            <main>
                <ModalDate />
            </main>

        </>
    )
}
