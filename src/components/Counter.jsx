import { useState, useEffect } from "react";
import "./Counter.css"

export default function Counter() {

    const [count, setCount] = useState(0)

    

    useEffect(() => {
        let interval = setInterval(() => {
                setCount((count) => count + 1)
            }, 1000)

            return () => clearInterval(interval)
    }, [])

    function addCookie() {
        setCount(count + 1)
    }

    return (
        <div id="Counter">
            <h2>{count}</h2>
            <button onClick={addCookie}>
                <img src="https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png" alt="cookie Button" />
            </button>
        </div>
    )
}