import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import RootLayout from './Components/RootLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FoodCard from './Pages/FoodCard';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import Details from './Pages/Details';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='LandingPage' element={<LandingPage />} />
        <Route path='Details' element={<Details />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='About' element={<About />} />
        <Route path='FoodCard' element={<FoodCard />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
    </Routes >
  )
}
export default App;
