import styles from './styl.js';
import '@ant-design/v5-patch-for-react-19';
import './swiperStyle.css'
import './index.css'
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Performance from './components/Performance.jsx'
import Inscription from './components/Inscription.jsx'
import Traduction from './components/Traduction.jsx'
import Personal from './components/Personal.jsx';
import {Clients} from './components/Clients.jsx';
import Debuter from './components/Debuter.jsx';
import Footer from './components/Footer.jsx';
import SwiperCard from './components/SwiperCard.jsx'
import AnimateOnScroll from './components/AnimateOnScroll.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Localisation from './components/localisation.jsx';
import "./App.css"
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

const Loading=()=>(
  <div>df
    <h2>Chargement....</h2>
    <DotLottieReact
      src="path/to/animation.lottie"
      loop
      autoplay
    />
  </div>
);

const App=()=> {
  const [isLoading,setIsLoading]=useState(true);
  let ptg=-10;
  useEffect(()=>{
    const timer=setInterval(()=>{
      ptg+=10;
      if(ptg>200){
        clearInterval(timer);
        setIsLoading(false);
      }
    },100);
  },[])
  
  return (
    <>
    <Spin  spinning={isLoading}  size='large' fullscreen/>
       <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter} fixed left-0 right-0 z-50 shadow-md md:mb-10`}>
          <div className={`${styles.boxWidth}`}>
            <AnimateOnScroll>
              <Navbar/>
            </AnimateOnScroll>
          </div>
        </div>
        <div className={`bg-primary${styles.flexStart} mt-10 pb-5`}>
          <div className={`${styles.boxWidth}`}>
            <Header/>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} datacenter`}>
            <SwiperCard/>
            <Performance/>
            <Inscription/>
            <Localisation/>
            <Traduction/>
            <Personal/>
            <Clients/>
            <Debuter/>
            <Footer/> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
