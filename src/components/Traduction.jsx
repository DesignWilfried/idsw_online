import Lottie from 'lottie-react';
import {motion,AnimatePresence} from "framer-motion"
import Button from './Button';
import styl,{layout} from '../styl'
import { translator } from '../assets';
import { traduction } from '../constant';
import { useState } from 'react';
import {close} from "../assets"
import "../App.css";
import TranductionTab from './TraductionTabs';
import AnimateOnScroll from './AnimateOnScroll';
import { Modal} from "antd";
import { createStyles,useTheme } from "antd-style";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

const Traduction=()=>{
    const [traduc,setTraduc]=useState(true);
//modal variable

const [isModalOpen, setIsModalOpen] = useState(false);
  const { styles } = useStyle();
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
    return(
    <AnimatePresence key="traduc">
        <motion.section id="Traduction" className={`${layout.section} flex justify-between items-center`}>
                <div
                 className={`${layout.sectionInfo} ${styl.paddingX}`}>
                    <AnimateOnScroll>
                        <h2 className={`${styl.heading2}`}>{traduction.title}</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <p className={`${styl.paragraph} max-w-[450px] mt-5 mb-6`}>
                            {traduction.subtitle}
                        </p>
                    </AnimateOnScroll>
                    <Button 
                    styles="mt-10" 
                    text="Contactez-Nous"
                    handleClick={toggleModal}
                    />
                </div>

                 <Modal
                    title="TRADUCTION"
                    open={isModalOpen}
                    centered
                    onOk={()=>setIsModalOpen(false)}
                    onCancel={()=>setIsModalOpen(false)}
                    footer="IDSW"
                    className={classNames}
                    styles={modalStyles}
                    >
                        <div
                            className="background-container glass-card "
                        >
                            <TranductionTab
                            handleClick={()=>setTraduc((prev)=>!prev)}
                            style="mt-2 w-full"
                            />
                        </div>
                    </Modal>
            <div className={layout.sectionImg}>
                <Lottie 
                    animationData={translator} 
                    loop={true} autoplay={true} 
                    className="md:w-[100%] w-[400px] h-[100%]"
                    />
                    {/* <DotLottieReact
                      src={translator}
                      loop
                      autoplay
                    /> */}
            </div>
        </motion.section>
    </AnimatePresence>
)}

export default Traduction;
