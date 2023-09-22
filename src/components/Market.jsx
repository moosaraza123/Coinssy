import React, { useEffect, useState } from 'react'
import './Market.css'
import axios from 'axios'
import Coin from './Coin'
import Bit from '/bitcoin.png'
import BnB from '/bnb.webp'
import ETH from '/ethereum.png'
import Tether from '/Tether.webp'
function Market() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );



  return <>
<div className="checkout">
<h2>CHECK OUT ALL TRENDING COINS</h2>
</div>
<div className="threeCoins">

  <div className="Btc">
<img src={Bit} alt="" />



  </div>


  <div className="Btc">
<img src={ETH} alt="" />

  </div>


  <div className="Btc">
<img src={Tether} alt="" />

  </div>
  <div className="Btc">
<img src={BnB} alt="" />

  </div>

  </div>


    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
 </>
}

export default Market;