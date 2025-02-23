import { NavBar } from './components/NavBar.jsx';
import { MainPage } from './components/MainPage.jsx';
import { Contact } from './components/Contact.jsx';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  
  return (
    <>
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
