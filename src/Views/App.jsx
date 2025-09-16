import React from 'react';
import "./App.css";
import "./../index.css";
import {Link} from "react-router";
import RightNavbar from '../Components/RightNavbar';
import Box from './../Components/Box';

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center z-10'>
    <div className='header'>Explore Vidarbha ✨</div>
    <div className='flex mt-20 flex-wrap justify-center w-[1000px] items-center'>
      <RightNavbar className="fixed left-0 top-0"/>
      <Box to={"/Nagpur"} boxTitle={"Nagpur"}/>
      <Box to={"/Wardha"} boxTitle={"Wardha"}/>
      <Box to={"/Bhandara"} boxTitle={"Bhandara"}/>
      <Box to={"/Akola"} boxTitle={"Akola"}/>
      <Box to={"/Amravati"} boxTitle={"Amravati"}/>
      <Box to={"/Gondia"} boxTitle={"Gondia"}/>
      <Box to={"/Buldhana"} boxTitle={"Buldhana"}/>
      <Box to={"/Gadchiroli"} boxTitle={"Gadchiroli"}/>
      </div>
    </div>
    )
  }

export default App;