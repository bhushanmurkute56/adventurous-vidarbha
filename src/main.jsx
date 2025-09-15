import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router";
import App from "./Views/App.jsx";
import Nagpur from "./Components/Nagpur.jsx";
import Akola from "./Components/Akola.jsx";
import Bhandara from "./Components/Bhandara.jsx";
import Wardha from "./Components/Wardha.jsx";
import Amravati from './Components/Amravati.jsx';
import Buldhana from "./Components/Buldhana.jsx";
import Gondia from "./Components/Gondia.jsx";
import Gadchiroli from './Components/Gadchiroli.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/Nagpur" element={<Nagpur />}></Route>
    <Route path='/Akola' element={<Akola />}></Route>
    <Route path='/Wardha' element={<Wardha />}></Route>
    <Route path='/Bhandara' element={<Bhandara />}></Route>
    <Route path="/Amravati" element={<Amravati />}></Route>
    <Route path='/Buldhana' element={<Buldhana />}></Route>
    <Route path='/Gondia' element={<Gondia />}></Route>
    <Route path='/Gadchiroli' element={<Gadchiroli />}></Route>
  </Routes>
  </BrowserRouter>
)