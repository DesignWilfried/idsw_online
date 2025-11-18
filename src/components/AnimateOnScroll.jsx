import React,{useEffect,useRef} from "react";
import {motion,useInView} from "framer-motion";

const AnimateOnScroll=({children,style})=>{
    const ref=useRef(null);
    //once:true, garantit que l'animation ne se declenche qu'une fois
    const isInView=useInView(ref,{once:true});
    const variants={
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0}
    };
    return (
        <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView?"visible":"hidden"}
        transition={{duration:.5,delay:.25}}
        className={`${style}`}
        >
            {children}
        </motion.div>
    );
}

export default AnimateOnScroll;