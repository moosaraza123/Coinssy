import React, { useState } from 'react'
import './Header.css'
import Headerimg1 from '/discord.png'
import Headerimg2 from '/twitter.png'
import MobNav from './MobNav'

function Header() {

  const[vale,setVal]=useState('flase')

function handleClick(){
if(vale=="flase"){
setVal('true')
}
else{
  setVal('flase')
}


}

  
  return <>
  {vale=="true" &&  <MobNav/> }





  <div className="headerContainer">
    <h1 > <a href="#hero">COINSYY</a></h1>
   
    <ul >
      <li><a href="#hero">Home</a></li>
      <li><a href="#market">market</a></li>
      <li><a href="#chooseUS">Choose US</a></li>
      <li><a href="#Footer">Join</a></li>

 







    </ul>

 
 <button onClick={handleClick}><i className="fa-solid fa-bars" style={{color:"#fff"}}></i></button>


    <div className="headIcons">
      <img src={Headerimg1} alt="" />
      <img src={Headerimg2} alt="" />





    </div>







  </div>
  
  
  
  
  
  </>
}

export default Header