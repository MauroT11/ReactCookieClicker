import { useState, useEffect } from 'react'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import UpgradesCard from './components/UpgradeCard'
import Footer from './components/Footer'
import { Upgrades } from './components/Upgrades'


function App() {

  const [count, setCount] = useState(0)
  const [perS, setPerS] = useState(1)
  // const [own, setOwn] = useState(0)  

  function getCookies() {
    // parseInt converts the string from local storage to a number
    const [cookies, setCookies] = useState(parseInt(localStorage.getItem("cookies")) || 0);
    const [cookiesPerSecond, setCookiesPerSecond] = useState(parseInt(localStorage.getItem("cookiesPerSecond")) || 1);

  }

  
  return (
    <>
      <Header setCount={setCount} setPerS={setPerS} />
      <Counter count={count} setCount={setCount} perS={perS} />
      <div id="UpgradesSection">
        <div id="upgradeGrid">
          <div className="upgrades">
            <h3>Upgrade</h3>
            <h3>Cost</h3>
            <h3>Cookie/s</h3>
            {/* <h3>Bought</h3> */}
            <h3>Buy</h3>
          </div>
          {Upgrades.map((upgrade => (
            <UpgradesCard 
            key={upgrade.id} 
            name={upgrade.name} 
            cost={upgrade.cost} 
            cookiesPS={upgrade.cookiePS} 
            value={upgrade.cookiePS} 
            setCount={setCount} 
            count={count}
            perS={perS} 
            setPerS={setPerS}
            // setOwnown={setOwn}
            // own={own}
            />
          )))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
