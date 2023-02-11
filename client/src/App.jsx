import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TourDetails from './pages/TourDetails';
import SearchResultList from './pages/SearchResultList';
import Tours from './pages/Tours';
import { Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="h-[100vh]">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="/tours/:id" element={<TourDetails/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="tours/search" element={<SearchResultList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
