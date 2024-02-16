import "./ResetButton.css"

export default function ResetButton({resetCount, resetPerS}) {

    function resetLocal() {
        if (confirm('Are you sure you want to reset?\nYou will lose all your progress!')) {
            resetCount(0)
            resetPerS(1)
            console.log('RESET')
        } else {
            console.log('RESET CANCELLED')
        }
        
    }
    return (
        <>
            <button onClick={resetLocal} id="resetBtn">Reset</button>
        </>
    )
}