import { ACTIONS } from "./App";


export default function OperationButton({ disbatch, operation }) {
    return (
        <button onClick={() => disbatch=({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}> 
        {operation}
        </button>
    )
}
