import { quotes } from "../assets";
import React,{useState} from "react";
import { Button, Modal } from 'antd';
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

import "../index.css"

const Feedback=({content,name,title,image,contact})=>{
      const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(true);
        const showLoading = () => {
            setOpen(true);
            setLoading(true);
            // Simple loading mock. You should add cleanup logic in real world.
            setTimeout(() => {
            setLoading(false);
            }, 2000);
        };
    return (
        <>
            <AnimateOnScroll>
                 <div
                onClick={showLoading}
                className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[400px]  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer">
                    <img src={quotes} alt="quotes_image" className="w-[42px] h-[27px] object-contain"/>
                    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                        {content}
                    </p>
                    <div className="flex flex-row items-center">
                        <img src={image} alt={name} className="w-[48px] h-[48px]  rounded-full object-contain" />
                        <div className="flex flex-col mt-4 ml-4">
                            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                            <h4 className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</h4>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
           
            {/* //MODAL */}
            <Modal
            styles={{content:{background:"#9e9fa1ff"},header:{background:"#9e9fa1ff",color:"white"}}}
            title="Contactez-Nous"
            footer={
            <p className="text-[30px]  text-gradient">IDSW</p>
            }
            loading={loading}
            open={open}
            onCancel={() => setOpen(false)}
        >
            <div className="flex justify-center items-center w-[100%] flex-row md:mt-0 mt-6 gap-4">
            {contact.map((social,index)=>(
                <motion.a 
                whileHover={{scale:1.5}}
                whileTap={{scale:1.3}}
                key={index}  href={social.link} target="_blanc">
                    <img src={social.icon} alt={index}
                    className={`${index===contact.lenght-1?'mr-0':"mr-4"} w-[35px] h-[35px] object-contain cursor-pointer`}
                     />
                </motion.a>
            ))}
        </div>
        </Modal>
      </>
    )
}
export default Feedback;