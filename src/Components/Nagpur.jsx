import React from 'react'
import RightNavbar from './RightNavbar';
import deekshabhumi from "./../assets/deekshabhumi.jpg";
import ramtektemple from "./../assets/ramtek-temple.jpeg";
import sitabuldifort from "./../assets/Sitabuldi-Fort.jpg";
import futalalake from "./../assets/futala-lake-nagpur.jpg";
import ramanscience from "./../assets/Raman_Science_Centre_Nagpur.jpg";
import ambazarilake from "./../assets/Ambazari-Lake-Nagpur.webp";
import NagpurPhotos from './NagpurPhotos';

function Nagpur() {
  return (
    <>
    <div className='flex justify-between'>
        <RightNavbar />
        <div className='h-fit max-w-4xl flex flex-wrap justify-center items-center m-auto'>
          <NagpurPhotos img={deekshabhumi} title={"Deeksha Bhumi"}/>
          <NagpurPhotos img={ramtektemple} title={"Ramtek Temple"}/>
          <NagpurPhotos img={sitabuldifort} title={"Sitabuldi Fort"}/>
          <NagpurPhotos img={futalalake} title={"Futala Lake"}/>
          <NagpurPhotos img={ramanscience} title={"Raman Science"}/>
          <NagpurPhotos img={ambazarilake} title={"Ambazari Lake"}/>
        </div>
    </div>
    </>
  )
}

export default Nagpur;