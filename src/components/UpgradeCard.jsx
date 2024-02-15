import "./UpgradesCard.css";
import { useState } from "react";

export default function UpgradesCard({name, cost, cookiesPS, setCount}) {
    return (
                <div className="upgrades">
                    <h3>{name}</h3>
                    <h3>{cost}</h3>
                    <h3>{cookiesPS}</h3>
                    <button value={cookiesPS} onClick={() => (
                        useEffect(() => {
                            let interval = setInterval(() => {
                                    setCount((count) => count + 5)
                                }, 1000)
                    
                                return () => clearInterval(interval)
                        }, [])
                    )}>Buy</button>
                </div>
    )
}