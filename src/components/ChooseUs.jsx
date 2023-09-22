import React from 'react'
import './ChooseUs.css'
import Choose from '/choose.png'
function ChooseUs() {
  return <>
  <div className="des">
  <h1>WHY <span>CHOOSE</span> US</h1>
  </div>
  <div className="chooseMain">
  
<div className="firstThreeProps">
<CreateFunctionality classname="fa-solid fa-wallet" heading="CONNECT YOUR WALLET" para="Use Trust Wallet, Metamask or to connect to the app."/>
<CreateFunctionality classname="fa-solid fa-pen" heading="SELECT YOUR QUANTITY" para="Upload your crypto and set a title, description and price."/>
<CreateFunctionality classname="fa-solid fa-square-check" heading="CONFIRM TRANSACTION" para="CONFIRM TRANSACTION
Earn by selling your crypto on our marketplace."/>






</div>

<div className="ChooseImg">
<img src={Choose} alt="" />


</div>


<div className="lastThreeProps">
<CreateFunctionality classname="fa-solid fa-message" heading="RECEIVE YOUR OWN NFTS" para="Invest all your crypto at one place on one platform."/>
<CreateFunctionality classname="fa-solid fa-bag-shopping" heading="TAKE A MARKET TO SELL" para="Discover, collect the right crypto collections to buy or sell."/>
<CreateFunctionality classname="fa-solid fa-layer-group" heading="DRIVE YOUR COLLECTION" para="We make it easy to Discover, Invest and manage."/>




</div>
    
  </div>



  
  
  </>


}
function CreateFunctionality({classname,heading,para}){
return <>

<div className="Functionality">
    <div className='f1Img'>
<i className={`${classname}`}></i>
</div>
<div className="f1">
<h3>
    {heading}

</h3>
<p>
{para}
</p>
</div>



</div>




</>


}




export default ChooseUs