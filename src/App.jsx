import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import UpgradesCard from './components/UpgradeCard'
import Footer from './components/Footer'
import { Upgrades } from './components/Upgrades'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Header setCount={setCount}/>
      <Counter count={count} setCount={setCount} />
      <div id="UpgradesSection">
        <div id="upgradeGrid">
          <div className="upgrades">
            <h3>Upgrade</h3>
            <h3>Cost</h3>
            <h3>Cookie/s</h3>
            <h3>Buy</h3>
          </div>
          {Upgrades.map((upgrade => (
            <UpgradesCard setCount={setCount} key={upgrade.id} name={upgrade.name} cost={upgrade.cost} cookiesPS={upgrade.cookiePS} value={upgrade.cookiePS} />
          )))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
