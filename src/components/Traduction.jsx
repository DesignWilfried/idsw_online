import Lottie from 'lottie-react';
import {motion,AnimatePresence} from "framer-motion"
import Button from './Button';
import styles,{layout} from '../styles'
import { translator } from '../assets';
import { traduction } from '../constant';
import { useState } from 'react';
import {close} from "../assets"
import "../App.css";
import TranductionTab from './TraductionTabs';
import AnimateOnScroll from './AnimateOnScroll';

const boxVariant={
    visible:{x:0,opacity:1,display:'flex',transition:{delay:.5}},
    hidden:{x:-400,opacity:0,rotate:2,display:'none'}
}

const Traduction=()=>{
    const [traduc,setTraduc]=useState(true);
    return(
    <AnimatePresence key="traduc">
        <motion.section id="Traduction" className={`${layout.section} `}>
            <div className="md:w-[50%] md:h-[100%] w-[100vw]  p-0" style={{height:"fit-content"}}>
                <motion.div
                 variants={boxVariant}
                 animate={traduc?'visible':'hidden'}
                 className={`${layout.sectionInfo} ${styles.paddingX}`}>
                    <AnimateOnScroll>
                        <h2 className={`${styles.heading2}`}>{traduction.title}</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <p className={`${styles.paragraph} max-w-[490px] mt-5 mb-6`}>
                            {traduction.subtitle}
                        </p>
                    </AnimateOnScroll>
                    <Button 
                    styles="mt-10" 
                    text="Contactez-Nous"
                    handleClick={()=>setTraduc((prev)=>!prev)}
                    />
                </motion.div>
                <motion.div
                 variants={boxVariant}
                 animate={!traduc?'visible':'hidden'}
                 className="background-container glass-card "
                 whileHover={{scale:1.05}}
                >
                    <div className="flex justify-between items-center w-full">
                        <h3 className={`${styles.heading2}`}>
                            Traduction
                        </h3>
                        <img src={close} alt="close" onClick={()=>setTraduc(true)} />
                    </div>
                    <TranductionTab
                    handleClick={()=>setTraduc((prev)=>!prev)}
                    style="mt-2 w-full"
                    />
                </motion.div>
            </div>
            <div className={layout.sectionImg}>
                <Lottie animationData={translator} loop={true} autoplay={true} className="md:w-[100%] w-[400px] h-[100%]"/>
            </div>
        </motion.section>
    </AnimatePresence>
)}

export default Traduction;