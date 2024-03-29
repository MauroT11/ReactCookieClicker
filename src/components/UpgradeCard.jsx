import "./UpgradesCard.css";
import { useEffect } from "react";

export default function UpgradesCard({name, cost, cookiesPS, setCount, count, perS, setPerS}) {

    function handleUpgrade() {
        if (count >= cost) {

            // INCREASES COOKIES PER SECOND AND DEDUCTS FROM COOKIE COUNT
            setTimeout(() => {
                setCount((count) => count - cost)
                setPerS((perS) => perS + cookiesPS) 
            }, 1)            
        } else {
            alert(`You dont have enough cookies to buy ${name}.`)
        } 
    }
    
    return (
                <div className="upgrades">
                    <h3>{name}</h3>
                    <h3>{cost}</h3>
                    <h3>{cookiesPS}</h3>
                    {/* <h3>{own}</h3> */}
                    <button value={cookiesPS} onClick={handleUpgrade}>Buy</button>
                </div>
    )
}