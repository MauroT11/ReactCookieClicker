import "./Header.css"
import ResetButton from "./ResetButton"

export default function Header({setCount, setPerS}) {
    return (
        <header>
            <a href="https://github.com/MauroT11" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
            </a>
            <h1>Cookie Clicker</h1>
            <ResetButton resetCount={setCount} resetPerS={setPerS} />
        </header>
    )
}