import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Settings from './Settings';
import Contact from './Contact';
import Notfound from './Notfound';
import Dynamicuser from './Dynamicuser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='Home' element={<Home></Home>}></Route>
      <Route path='Menu' element={<Menu></Menu>}></Route>
      <Route path='Settings' element={<Settings></Settings>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<Dynamicuser></Dynamicuser>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
