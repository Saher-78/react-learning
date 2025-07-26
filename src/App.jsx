import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from "./page/Home"
import Navbar from './components/Navbar';
import About from './page/About';
import Contact from './page/Contact';
import Footer from './page/Footer';
import StateHook from './Hooks/StateHook';
import Conditions from './components/Conditions';
import Card from './components/Card';
import CardsMap from './components/CardsMap';
import FormHandling from './components/FormHandling';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/use-state-hook' element={<StateHook />} />
          <Route path='/condition' element={<Conditions/>}></Route>
            <Route path='/card-using-map' element={<Card/>}/>
            <Route path='/cards-map' element={<CardsMap/>}/>
            <Route path='/forms' element={<FormHandling/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App;