import { useContext } from "react"
import { GlobalContext } from "../../../../context/index.jsx"


function ContextTextComponent() {

    const { theme } = useContext(GlobalContext)
    return <h1 style={{ fontSize: theme === "light" ? "50px" : "100px", color: theme === "light" ? "blue" : "yellow", backgroundColor: theme === "light" ? "#fff" : "#000" }}>Adegoke Christopher</h1>
}

export default ContextTextComponent