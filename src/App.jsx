import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import MyProfile from './pages/MyProfile'; 
import MyAppoitment from './pages/MyAppoitment'; 
import Appoitment from './pages/Appoitment'; 
import Footer from './components/Footer';
import NotFound from './pages/NotFound'; // Ensure you have this page

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/doctor/:speciality' element={<Doctor />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appoitment' element={<MyAppoitment />} />
        <Route path='/appoitment/:docId' element={<Appoitment />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for Not Found */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
