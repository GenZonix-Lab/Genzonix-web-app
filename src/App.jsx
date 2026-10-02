import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './application/main/Header'
import Footer from './application/main/Footer'
import Home from './application/main/Home'
import PrivacyPolicy from './application/Supportpages/PrivacyPolicy'
import Policy from './application/Supportpages/Policy'
import TermsConditions from './application/Supportpages/Terms'
import Faq from './application/Supportpages/Faq'
import Support from './application/Supportpages/Support'
import Missing from './Missing'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms&Conditions" element={<TermsConditions />} />
        <Route path="/faq/" element={<Faq />} />
        <Route path="/support" element={<Support />} />
        <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App