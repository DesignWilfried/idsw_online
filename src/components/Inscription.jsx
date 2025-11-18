import {motion,AnimatePresence} from "framer-motion"
import Button from "./Button";
import styles, { layout } from "../styles";
import Lottie from 'lottie-react'
import { inscription } from "../assets";
import { inscriptionCard } from "../constant";
import React,{ useState } from "react";
import Tab from "./TabsInscription.jsx";
import {close} from '../assets'
import "../App.css"
import AnimateOnScroll from "./AnimateOnScroll.jsx";


const boxVariant={
    visible:{x:0,opacity:1,rotate:0,display:'flex',transition:{delay:.5}},
    hidden:{x:400,opacity:0,rotate:2,display:'none'}
}

const Inscription=()=>{
   const [inscript,setInscript]=useState(true);
   const toggle=()=>{
    setInscript(!inscript);
    console.log(inscript)
   }
    return (
        <AnimatePresence key="inscript">
            <motion.section id='Inscription' className={`${layout.sectionReverse} relative`}> 
                <motion.div  className={`${layout.sectionImgReverse} max-w-[570px]`}>
                    <Lottie animationData={inscription} loop={true} className="w-full h-[100%] relative" />   
                </motion.div>
                <div className='absolute z-[0] -right-1/3 -top-1/2 w-[500px] h-[500px] rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/3 bottom-0 w-[700px] h-[700px] rounded-full pink__gradient'/>
               
                <div className="md:w-[50%] md:h-[100%]  w-[100vw]  p-2">
                    <motion.div 
                        variants={boxVariant}
                        animate={inscript?'visible':'hidden'}
                        className={`${layout.sectionInfo} ${styles.paddingX} w-full `}>
                             <AnimateOnScroll>
                                <h2 className={`${styles.heading2}`}>
                                    {inscriptionCard.title}
                                </h2>
                             </AnimateOnScroll>
                            <AnimateOnScroll>
                                <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
                                    {inscriptionCard.subtitle}
                                </p>
                            </AnimateOnScroll>
                            
                            <Button 
                            styles='mt-10 z-[4]' 
                            text="S'inscrire"
                            handleClick={()=>setInscript((prev)=>!prev)}
                            />
                        </motion.div>
                    <motion.div
                        variants={boxVariant}
                        animate={!inscript?'visible':'hidden'}
                        className="background-container glass-card "
                        whileHover={{ scale: 1.05 }} 
                        // whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex justify-between items-center w-full">
                                <h3 className={`${styles.heading2}`}>
                                Inscription
                                </h3>
                                <img src={close} alt="close" onClick={()=>setInscript(true)} />
                            </div>
                            <Tab
                             handleClick={()=>setInscript((prev)=>!prev)} 
                             style="mt-2 w-full"/>
                    </motion.div>
                </div>
                
            </motion.section>
        </AnimatePresence>
)}

export default Inscription;