import "./Header.css"
import ResetButton from "./ResetButton"

export default function Header({setCount, setPerS}) {
    return (
        <header>
            <h1>Cookie Clicker</h1>
            <ResetButton resetCount={setCount} resetPerS={setPerS} />
        </header>
    )
}