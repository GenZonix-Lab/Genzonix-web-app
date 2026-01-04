import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import PrivacyPolicy from './Supportpages/PrivacyPolicy'
import Policy from './Supportpages/Policy'
import TermsConditions from './Supportpages/Terms'
import Faq from './Supportpages/Faq'
import Support from './Supportpages/Support'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App