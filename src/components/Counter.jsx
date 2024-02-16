import { useEffect } from "react";
import "./Counter.css"

export default function Counter({count, setCount, perS}) {

    useEffect(() => {
        let interval = setInterval(() => {
                setCount((count) => count + perS)
        }, 1000)
            
        localStorage.setItem("Cookies", count.toString()); 
        localStorage.setItem("cookiesPerSecond", perS.toString());

        return () => (clearInterval(interval))
    }, [count, perS])

    // ADDS 1 COOKIE WHEN USER CLICKS THE COOKIE IMAGE
    function addCookie() {
        setCount(count + 1)
    }

    return (
        <div id="Counter">
            <p>Cookie(s) p/s: {perS}</p>
            <h2>{count}</h2>
            <button onClick={addCookie}>
                <img src="https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png" alt="cookie Button" />
            </button>
        </div>
    )
}