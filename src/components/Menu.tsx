import useToggler from "../useToggler"

function Menu() {
    const { on, toggle } = useToggler()

    return (
        <div>
            <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
            <nav style={{ display: on ? "block" : "none" }}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>
    )
}

export default Menu
