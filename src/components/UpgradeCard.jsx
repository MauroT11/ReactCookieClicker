import "./UpgradesCard.css";
import { useEffect } from "react";

export default function UpgradesCard({name, cost, cookiesPS, setCount, count, setOwn, own}) {

    function handleUpgrade() {
        if (count > cost) {
            let upgrade = JSON.parse(count)
            // let bought = JSON.parse(own)
            // setOwn = bought + 1
            // console.log(bought)
            setInterval(() => {
                setCount((upgrade) => upgrade + cookiesPS)
                // console.log(up)
            }, 1000);
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