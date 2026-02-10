import { useContext } from "react"
import { GlobalContext } from "../../../../context/index.jsx"

function ContextButtonComponent() {

    const { theme, handleChangeThemeOnButtonClick } = useContext(GlobalContext)
    return <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
}

export default ContextButtonComponent