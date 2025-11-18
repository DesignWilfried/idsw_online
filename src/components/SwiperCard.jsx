import React, { useState } from "react";
import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "../styles";
import { motion } from "framer-motion";
import { Button, Modal } from "antd";
import AnimateOnScroll from "./AnimateOnScroll";

import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';
import { fille_apprend,courEnLigne,coursADomicile,vie_en_allemand,traduction } from "../assets";



const SwiperCard=()=>{
    const [modal1,setModal1]=useState(false);
    const [modal2,setModal2]=useState(false);
    const [modal3,setModal3]=useState(false);
    const [modal4,setModal4]=useState(false);
    const [modal5,setModal5]=useState(false);
    
    const ModalElem=({modalOpen,setModalOpen,src,title})=>(
        <Modal
        title={`${title?title:""}`}
        centered
        open={modalOpen}
        footer={
            <Button type="primary" onClick={()=>setModalOpen(false)}>
                okay
            </Button>
        }
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
            <img src={src} alt="" style={{borderRadius:20}}/>
      </Modal>
    );
    return (
        <AnimateOnScroll>
            <section className="html z-[0]">
        <div className="body relative">
            <div className="absolute -top-[10%] right-[20%] w-[200px] h-[300%] blue__gradient"/>
            <h1 className={`${styles.heading2} absolute right-[35%] top-[0] flex justify-center items-center w-full mb-5`}>Nos Services</h1>
             <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={false}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate:5,
                        stretch:0,
                        depth:200,
                        modifier:2.5,
                    }}
                    pagination={{el:'.swiper-pagination',clickable:true}}
                    navigation={{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                        clickable:true,
                    }} 
                    modules={[EffectCoverflow,Pagination,Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <motion.div
                        whileTap={{scale:1.04}}
                        
                        >
                            <img src={fille_apprend} alt="" className="max-w-full relative" onClick={()=>setModal1(true)} />
                            <ModalElem modalOpen={modal1} setModalOpen={setModal1} src={fille_apprend} title="Apprentissage a fond"/>
                        </motion.div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                        whileTap={{scale:1.04}}
                        
                        >
                            <img src={courEnLigne} alt="" className="max-w-full relative" onClick={()=>setModal2(true)} />
                            <ModalElem modalOpen={modal2} setModalOpen={setModal2} src={courEnLigne} title="Cour en ligne"/>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                        whileTap={{scale:1.04}}
                        
                        >
                            <img src={coursADomicile} alt="" className="max-w-full relative"onClick={()=>setModal3(true)} />
                            <ModalElem modalOpen={modal3} setModalOpen={setModal3} src={coursADomicile} title="Cour depuis la maison"/>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                        whileTap={{scale:1.04}}
                        
                        >
                            <img src={vie_en_allemand} alt="" className="max-w-full relative"onClick={()=>setModal4(true)} />
                            <ModalElem modalOpen={modal4} setModalOpen={setModal4} src={vie_en_allemand} title="votre Avenir en allemangne"/>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <motion.div
                        whileTap={{scale:1.04}}
                        
                        >
                            <img src={traduction} alt="" className="max-w-full relative"onClick={()=>setModal5(true)} />
                            <ModalElem modalOpen={modal5} setModalOpen={setModal5} src={traduction} title="traduction de vos documents"/>
                        </motion.div>
                    </SwiperSlide>

                    <div className="slider-controler ">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
             </div>
        </div>
       </section>
        </AnimateOnScroll>
       
    )

}

export default SwiperCard;