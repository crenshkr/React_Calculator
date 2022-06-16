import { ACTIONS } from "./App";


export default function DigitButton({ disbatch, digit }) {
    return (
        <button onClick={() => disbatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}> 
        {digit}
        </button>
    )
}
