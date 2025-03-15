import { NavBar } from './components/NavBar.jsx';
import { MainPage } from './components/MainPage.jsx';
import { Contact } from './components/Contact.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { SuccessPage } from './components/SuccessPage.jsx';

import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';


function App() {
  const location = useLocation();
  
  return (
    <>
	<Analytics />
      {/* Hide NavBar when on the Contact page */}
      {location.pathname === "/" && <NavBar />}
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
