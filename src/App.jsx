import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import UpgradesCard from './components/UpgradeCard'
import { Upgrades } from './components/Upgrades'

function App() {

  return (
    <>
      <Header />
      <Counter />
      <div id="UpgradesSection">
        <h1>Upgrades</h1>
        <div id="upgradeGrid">
          <div className="upgrades">
            <h3>Upgrade</h3>
            <h3>Cost</h3>
            <h3>Cookie/s</h3>
            <h3>Buy</h3>
          </div>
          {Upgrades.map((upgrade => (
            <UpgradesCard key={upgrade.id} name={upgrade.name} cost={upgrade.cost} cookiesPS={upgrade.cookiePS} />
          )))}
        </div>
      </div>
    </>
  )
}

export default App
