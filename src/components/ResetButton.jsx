import "./ResetButton.css"

export default function ResetButton({resetCount, resetPerS}) {

    function resetLocal() {
        resetCount(0)
        resetPerS(1)
    }

    return (
        <>
            <button onClick={resetLocal} id="resetBtn">Reset</button>
        </>
    )
}