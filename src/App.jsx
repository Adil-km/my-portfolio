import { NavBar } from './components/NavBar.jsx';
import { MainPage } from './components/MainPage.jsx';
import { Contact } from './components/Contact.jsx';
import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';



function App() {
  const location = useLocation();
  
  return (
    <>
	<Analytics />
      {/* Hide NavBar when on the Contact page */}
      {location.pathname !== "/contact" && <NavBar />}
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
