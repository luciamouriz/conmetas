
import sun from "../../assets/icon-sun.svg";
import goals from "../../assets/goals.svg";
import tasks from "../../assets/tasks.svg";
import project from "../../assets/projects.svg";
import { useState } from "react";

export const Aside = ({ close }) => {

    const [visible, setVisible] = useState(true);
    const [classColor, setClassColor] = useState();


    const handleClick = () => {
        close(); //Actualizamos en App.jsx el contenedor-Grid principal
        /*Cambiamos la clase del boton que cierra y abre el aside*/
        if (classColor == "close") {
            setVisible(true)
            setClassColor("")
        } else {
            setVisible(false)
            setClassColor("close");
        }
    }

    /**/
    return (
        <>
            <button onClick={handleClick} className="button-close-aside">
                <span className={`${classColor}`}></span>
                <span className={`${classColor}`}></span>
                <span className={`${classColor}`}></span>
            </button>
            <aside style={{ display: visible ? "flex" : "none" }}>
                <a className="myday">
                    <img src={sun} />
                    <p>MI DIA</p>
                </a>
                <a className="goals">
                    <img src={goals} />
                    <p>OBJETIVOS</p>
                </a>
                <a className="tasks">
                    <img src={tasks} />
                    <p>ACTIVIDADES</p>
                </a>
                <a className="projects">
                    <img src={project} />
                    <p>PROJECTOS</p>
                </a>
            </aside>
        </>

    )
}
