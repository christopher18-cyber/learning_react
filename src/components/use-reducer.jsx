import { useReducer } from "react"

const initialState = {
    showTextFlag: false,
    changeTextStylesFlag: false
}

function reducer(state, action) {
    switch (action.type) {
        case "value":

            return state

        default:
            return state
    }
}

export default function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);


    return (
        <div>
            <button>Hide text</button>
            <button>Show text</button>
            <button>Chnage Text styles</button>
        </div>
    )
}