import React from 'react'
import './Hero.css'
import BitCoin from '/bitcoin.png'
import Eth from '/ethereum.png'


function Hero() {
  return <>
  <div className="heroContainer">

<div className="heroDiscription">
<img src={Eth}alt="" />
    <p>MONITOR</p>
    <h2>CRYPTOS</h2>
<img src={BitCoin}alt="" id='BTC'/>

    </div>

 
  </div>
 
  
  
  </>
}
export default Hero
