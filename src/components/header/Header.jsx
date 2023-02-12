import logo from "../../assets/logo.svg"
import notification from "../../assets/notification.svg"
import user from "../../assets/user.svg"

export const Header = () => {
    return (
        <header>
            <img src={logo} />
            <div className="header-buttons">
                <button>
                    <img src={notification} />
                </button>
                <button>
                    <img src={user} />
                </button>
            </div>
        </header>
    )
}
