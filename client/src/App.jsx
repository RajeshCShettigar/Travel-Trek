import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TourDetails from './pages/TourDetails';
import SearchResult from './components/SearchResult';
import Payment from './components/Payments';
import { Navigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'


function App() {

  return (
    <div className="scroll-smooth hover:scroll-auto bg-gray-50">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/tours/:id" element={<TourDetails/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/search" element={<SearchResult/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
