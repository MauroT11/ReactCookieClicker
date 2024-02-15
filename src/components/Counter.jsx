import { useState, useEffect } from "react";
import "./Counter.css"

export default function Counter({count, setCount}) {
 
    useEffect(() => {
        let interval = setInterval(() => {
                setCount((count) => count + 1)
            }, 1000)
            
        localStorage.setItem("Cookies", count.toString()); 
        // localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());

        return () => (clearInterval(interval))
    }, [count])
    // }, [cookies, cookiesPerSecond])

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