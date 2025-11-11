import { NavBar } from './components/NavBar.jsx';
import { MainPage } from './components/MainPage.jsx';
import { Contact } from './components/Contact.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { SuccessPage } from './components/SuccessPage.jsx';
import Blog from './components/Blog.jsx';
import Admin from './components/Admin.jsx';

import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import SingleBlog from './components/SingleBlog.jsx';
import AddBlog from './components/Blog/AddBlog.jsx';
import Dashboard from './components/Blog/Dashboard.jsx';

import axios from 'axios';

axios.defaults.withCredentials = true;

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
        
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin/auth" element={<Admin />} />
        <Route path="/admin/add" element={<AddBlog />} />
        <Route path="/admin/posts" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
