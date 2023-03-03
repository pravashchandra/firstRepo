import React,{useState} from 'react'
import HeroSection from '../component/HeroSection';
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import InfoSection from '../component/InfoSection'
import { homeObjOne, homeObjTwo ,homeObjThree } from '../component/InfoSection/Data';
import Services from '../component/Services';
import Footer from '../component/Footer';

const Home = () => {

    const[isOpen, setIsOpen]=useState(false);

    const toggle =()=>{
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Footer />
        
    </>
    
  )
}

export default Home
