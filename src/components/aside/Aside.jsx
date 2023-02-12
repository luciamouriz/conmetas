import menu from "../../assets/close-aside.svg";
import sun from "../../assets/icon-sun.svg";
import goals from "../../assets/goals.svg";
import tasks from "../../assets/tasks.svg";
import project from "../../assets/projects.svg";


export const Aside = () => {
  return (
    <aside>
        <button>
            <img src={menu}/>
        </button>
        <a className="myday">
            <img src={sun}/>
            <p>MI DIA</p>
        </a>
        <a className="goals">
            <img src={goals}/>
            <p>OBJETIVOS</p>
        </a>
        <a className="tasks">
            <img src={tasks}/>
            <p>ACTIVIDADES</p>
        </a>
        <a className="projects">
            <img src={project}/>
            <p>PROJECTOS</p>
        </a>
    </aside>
  )
}
