import "./ResetButton.css"

export default function ResetButton({resetCount}) {

    return (
        <>
            <button onClick={() => resetCount(0)} id="resetBtn">Reset</button>
        </>
    )
}