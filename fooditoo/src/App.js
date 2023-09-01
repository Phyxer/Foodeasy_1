
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav  from './Nav.js'
import Cart  from './Cart.js'
import Chatbot  from './Chatbot.js'
import Donate_food from './Donate_food.js';
import Available_food from './Available_food.js';
import Login from './Login.js';
import Header from './Header.js';
// import Profile from './Profile.js';
//import NoFoodIcon from '@mnui/icons-material/NoFood';
function App() {
  return (
    <BrowserRouter>
         <Nav/>
    <Routes>
      
      <Route path="/" element={<Header/>} />

      <Route path="/Donate_Food" element={
      
      
 
    
      <Donate_food/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Available_food" element={<Available_food/>} />
      {/* { <Route path="/checkout" element={<checkout/>} /> } */}
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
