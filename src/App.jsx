import './App.css'
import AboutUs from './components/AboutUs'
import Barbers from './components/Barbers'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import Products from './components/Products'


const App = () => {

  return (
    <>
      <Header />
      <HeroSection  />
      <AboutUs />
      <OurServices />
      <Barbers />
      <Products />
      <Footer />
    </>
  )
}

export default App
