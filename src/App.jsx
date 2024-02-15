import { useState, useEffect } from 'react'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import UpgradesCard from './components/UpgradeCard'
import Footer from './components/Footer'
import { Upgrades } from './components/Upgrades'


function App() {

  const [count, setCount] = useState(0)
  // const [own, setOwn] = useState(0)

  function setLocalStorage() {
    // Store cookies and cookiesPerSecond to local storage
    useEffect(() => {
      // local storage supports strings so we convert it to a string before saving it
      localStorage.setItem("cookies", cookies.toString()); 
      localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
    }, [cookies, cookiesPerSecond]);
  }
  

  function getCookies() {
    // parseInt converts the string from local storage to a number
    const [cookies, setCookies] = useState(parseInt(localStorage.getItem("cookies")) || 0);
    const [cookiesPerSecond, setCookiesPerSecond] = useState(parseInt(localStorage.getItem("cookiesPerSecond")) || 1);

  }

  
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
