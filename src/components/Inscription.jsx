import {motion,AnimatePresence} from "framer-motion"
import Button from "./Button";
import styl, { layout } from "../styl.js";
import Lottie from 'lottie-react'
import { inscription } from "../assets";
import { inscriptionCard } from "../constant";
import React,{ useState } from "react";
import Tab from "./TabsInscription.jsx";
import {close} from '../assets'
import "../App.css"
import AnimateOnScroll from "./AnimateOnScroll.jsx";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
//modal import
import { Modal,Space } from "antd";
import { createStyles,useTheme } from "antd-style";
import Login from "./Login.jsx";


const useStyle=createStyles(({token})=>({
    'my-modal-body': {
    background: token.blue1,
    padding: token.paddingSM,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid #333',
  },
}))


const Inscription=()=>{
//variable modal
const [isModalOpen, setIsModalOpen] = useState(false);
  const { styles } = useStyle();
  const tokenColor = useTheme();
  const toggleModal = () => {
    setIsModalOpen(true);
  };
  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  };
  const modalStyles = {
    header: {
      borderInlineStart: `5px solid ${tokenColor.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  };
  //fin
//token
const [token,setToken]=useState(`${localStorage.getItem('userToken')}`);
const [loginModal,setLoginModal]=useState(false);
const toggleLoginModal=()=>{
  setLoginModal(true);
}
  
    return (
        <AnimatePresence key="inscript">
            <motion.section id='Inscription' className={`${layout.sectionReverse} relative`}> 
                <motion.div  className={`${layout.sectionImgReverse} `}>
                    <Lottie animationData={inscription} loop={true} className="w-full h-[100%] relative" />   
                </motion.div>
                <div className='absolute z-[0] -right-1/3 -top-1/2 w-[400px] h-[400px] rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/3 bottom-0 w-[400px] h-[400px] rounded-full pink__gradient'/>
               
                    <div 
                        className={`${layout.sectionInfo} ${styl.paddingX} w-full `}>
                             <AnimateOnScroll>
                                <h2 className={`${styl.heading2}`}>
                                    {inscriptionCard.title}
                                </h2>
                             </AnimateOnScroll>
                            <AnimateOnScroll>
                                <p className={`${styl.paragraph} max-w-[670px] mt-5`}>
                                    {inscriptionCard.subtitle}
                                </p>
                            </AnimateOnScroll>
                            
                            <Button 
                            styles='mt-10 z-[4]' 
                            text="S'inscrire"
                            handleClick={token ? toggleModal : toggleLoginModal}
                            />
                    </div>
                    <Modal
                    title="INSCRIPTION"
                    open={isModalOpen}
                    centered
                    onOk={()=>setIsModalOpen(false)}
                    onCancel={()=>setIsModalOpen(false)}
                    footer="IDSW"
                    className={classNames}
                    styles={modalStyles}
                    >
                        <div
                        className="background-container glass-card py-7"
                        >
                            <Tab
                             handleClick={()=>setIsModalOpen(false)} 
                             style="mt-6 w-full"/>
                        </div>
                    </Modal>
                {/* connexion verification */}
                <Modal
                  title="Connexion"
                  open={loginModal}
                  centered
                  onOk={()=>setLoginModal(false)}
                  onCancel={()=>setLoginModal(false)}
                  footer="IDSW"
                  className={classNames}
                  styles={modalStyles}
              >
                    < Login/>
              </Modal>
            </motion.section>
        </AnimatePresence>
)}

export default Inscription;
