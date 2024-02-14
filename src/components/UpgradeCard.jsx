import "./UpgradesCard.css"

export default function UpgradesCard({name, cost, cookiesPS}) {
    return (
                <div className="upgrades">
                    <h3>{name}</h3>
                    <h3>{cost}</h3>
                    <h3>{cookiesPS}</h3>
                    <button>Buy</button>
                </div>
    )
}