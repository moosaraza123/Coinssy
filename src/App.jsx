
import './App.css'
import ChooseUs from './components/ChooseUs'
import Footer from './components/footer'
import Header from './components/Header'
import Hero from './components/hero'
import JoinUs from './components/JoinUs'
import Market from './components/Market'
function App() {


  return <>
  <section id='head'>
  <Header/>
  </section>

<section id="hero">

<Hero/>
</section>

<section id="market">
  <Market/>
  </section>

  <section id="chooseUS">
  <ChooseUs/>
  </section>

  <section id="JoinUS">
 <JoinUs/>
  </section>
  <section id="Footer">
<Footer/>
  </section>
  </>



}

export default App
