import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './pages/Main/Header';
import Hero from './pages/Main/Hero';
import About from './pages/Main/About'; 
import Achieve from './pages/Main/Achieve'; 
import Activity from './pages/Main/Activity';
import FAQ from './pages/Main/FAQ';
import ApplyPage from './pages/Applying/ApplyPage';
import Recruiting from "./pages/Recruiting/Recruiting";
import Admin from './pages/Admin/admin';
import Login from './pages/Login/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";


function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("http://54.180.97.182:3001").then((response)=>{
      console.log("IT WORKED");
    })
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Achieve />
      <Activity />
      <FAQ />
    </div>
  )
}

function App() {
  return (
  <AuthProvider>
    <Router>
      <ScrollToTop /> {/* 페이지 변경 시 최상단 이동 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/apply" element={<ApplyPage />} /> 
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
