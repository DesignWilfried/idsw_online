import {motion,AnimatePresence} from "framer-motion"
import Button from "./Button";
import styl, { layout } from "../styl.js";
import Lottie from 'lottie-react'
import { localisation } from "../assets";
import { inscriptionCard } from "../constant";
import React,{ useState } from "react";
import Tab from "./TabsInscription.jsx";
import "../App.css"
import AnimateOnScroll from "./AnimateOnScroll.jsx";
//modal import
import { Modal,Tag } from "antd";
import { createStyles,useTheme } from "antd-style";
import { RadarChartOutlined,HomeOutlined } from "@ant-design/icons";



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


const Localisation=()=>{
//variable modal
const [isModalOpen, setIsModalOpen] = useState(false);
  const { styles } = useStyle();

  const fullAddress = "VGJ4+JGP Sprachschule Der Sicherste Weg, Av. du 27 Août 1940, Yaoundé, Cameroon";

// const mapsUrl = `https://www.google.com/maps/dir//Current+Location/${encodeURIComponent(fullAddress)}`;
const mapsUrl=`https://www.google.com/maps/dir/?api=1&dir_action=navigate&destination=${encodeURIComponent(fullAddress)}`;
const mapsUrl1=`https://www.google.com/maps/dir/?api=1&dir_action=navigate&destination=${encodeURIComponent("3.8458009142962286, 11.469318335697539")}`;

  const token = useTheme();
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
      borderInlineStart: `5px solid ${token.colorPrimary}`,
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
  
    return (
        <AnimatePresence key="inscript">
            <motion.section id='Inscription' className={`${layout.sectionReverse} relative`}> 
                <motion.div  className={`${layout.sectionImgReverse} `}>
                
                    <Lottie animationData={localisation} loop={true} className="w-full h-[100%] relative" />   
                </motion.div>
                <div className='absolute z-[0] -right-1/3 -top-1/2 w-[400px] h-[400px] rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/3 bottom-0 w-[400px] h-[400px] rounded-full pink__gradient'/>
               
                    <div 
                        className={`${layout.sectionInfo} ${styl.paddingX} w-full `}>
                             <AnimateOnScroll>
                                <h2 className={`${styl.heading2}`}>
                                    Nos locaux dans la ville de Yaoundé
                                </h2>
                             </AnimateOnScroll>
                            <AnimateOnScroll>
                                <p className={`${styl.paragraph} max-w-[670px] mt-5`}>
                                    Nous sommes un centre multifonctionnel gérant dans plusieurs domaines en vue de faciliter.
La procédure de nos apprenants. Nous sommes situées. Cliquer sur le bouton pour plus d'information
                                </p>
                            </AnimateOnScroll>
                            
                            <Button 
                            styles='mt-10 z-[4]' 
                            text="Localisation"
                            handleClick={toggleModal}
                            />
                    </div>
                    <Modal
                    title="LOCALISATION"
                    open={isModalOpen}
                    centered
                    onOk={()=>setIsModalOpen(false)}
                    onCancel={()=>setIsModalOpen(false)}
                    footer="IDSW"
                    className={classNames}
                    styles={modalStyles}
                    >
                        <div
                        className="background-container glass-card py-7 flex  gap-3"
                        >
                            <div>
                                <div className="mb-3">
                                    <Tag
                                    icon={<RadarChartOutlined/>}
                                    color="processing"
                                    >
                                        <a
                                            href={mapsUrl}
                                            
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            IDSW Jouvence
                                        </a>
                                    </Tag>
                                </div>
                                
                                 <div className="mb-3">
                                    <Tag
                                    icon={<HomeOutlined/>}
                                    color="processing"
                                    >
                                        <a
                                            href={mapsUrl1}
                                            
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            IDSW Ngoakele
                                        </a>
                                    </Tag>
                                </div>
                                 <div>
                                    <Tag
                                    icon={<RadarChartOutlined/>}
                                    color="processing"
                                    >
                                        <a
                                            href={mapsUrl}
                                            
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            IDSW tsinga
                                        </a>
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Modal>
                
            </motion.section>
        </AnimatePresence>
)}

export default Localisation;
