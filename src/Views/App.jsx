import React from 'react';
import "./App.css";
import "./../../src/index.css";
import {Link} from "react-router";

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
    <div className='header'>Explore Vidarbha ✨</div>
    <div>
    <div className='flex flex-wrap mt-20'>
        <Link to={"/Nagpur"}>
        <div className='h-[200px] w-[200px] border-1 flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Nagpur</div>
        </Link>
        <Link to={"/Wardha"}>
        <div className='h-[200px] w-[200px] border-1 flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Wardha</div>
        </Link>
        <Link to={"/Bhandara"}>
        <div className='h-[200px] w-[200px] border flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Bhandara</div>
        </Link>
        <Link to="/Akola"><p className='h-[200px] w-[200px] border flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Akola</p>
        </Link>
      </div>
      <div className='flex flex-wrap'>
        <Link to={"/Amravati"}>
        <div className='h-[200px] w-[200px] border-1 flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Amravati</div>
        </Link>
        <Link to={"/Gondia"}>
        <div className='h-[200px] w-[200px] border-1 flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Gondia</div>
        </Link>
        <Link to={"/Buldhana"}>
        <div className='h-[200px] w-[200px] border flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Buldhana</div>
        </Link>
        <Link to="/Gadchiroli"><p className='h-[200px] w-[200px] border flex items-center justify-center cursor-pointer m-2 rounded-xl card'>Gadchiroli</p>
        </Link>
      </div>
     </div>
    </div>
    )
  }

export default App;