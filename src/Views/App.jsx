import React from 'react';
import "./App.css";
import "./../index.css";
import { Link } from "react-router";
import RightNavbar from '../Components/RightNavbar';
import Box from './../Components/Box';

function App() {
  return (
    <div className='min-h-screen flex justify-between w-full '>
      <RightNavbar />
      <div className='p-10 w-full'>
        <p className='header w-fit mx-auto'>Explore Vidarbha ✨</p>
        <div className='items-center mx-auto sm:mt-20 max-w-4xl flex justify-center gap-2 sm:gap-7 flex-wrap p-10'>
          <Box to={"/Nagpur"} boxTitle={"Nagpur"} />
          <Box to={"/Wardha"} boxTitle={"Wardha"} />
          <Box to={"/Bhandara"} boxTitle={"Bhandara"} />
          <Box to={"/Akola"} boxTitle={"Akola"} />
          <Box to={"/Amravati"} boxTitle={"Amravati"} />
          <Box to={"/Gondia"} boxTitle={"Gondia"} />
          <Box to={"/Buldhana"} boxTitle={"Buldhana"} />
          <Box to={"/Gadchiroli"} boxTitle={"Gadchiroli"} />
        </div>
      </div>
    </div>
  )
}

export default App;