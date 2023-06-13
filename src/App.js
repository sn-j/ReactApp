import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.js'
import Main from './Components/Main.js'
import Contact from './Components/Contact';
import About from './Components/About';
import MinMax, { EvenOdd } from './Components/Classwork';
import Classwork1 from './Components/FoodCard';
import FoodCard from './Components/FoodCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar logo="Demo" name="Contact" text="Search" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="FoodCard" element={<FoodCard />} />
      </Routes>
    </BrowserRouter>
  );
}
// 


export default App;
