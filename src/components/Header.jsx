import React from "react";
import styles from "../styles";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import { AnimatedTitle } from "./AnimatedTitle";
const Header=()=>{
    return (
        <section id="Header" className={` flex justify-center md:flex-row flex-col w-full  ${styles.paddingY}`}>
            <div className="absolute right-[50%] w-[100%] h-[400px] blue__gradient"/>
            <div className={`element bg-primary flex ${styles.flexCenter} flex-col xl:px-0 sm:px-16 py-3 px-16 relative w-full gap-5`}>
                <div className="absolute z-[0] right-[20%] w-[100%] h-[400px] pink__gradient"/>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[42px] h-[42px] object-contain" />
                    <p className={`${styles.paragraph} ml-2 text-nowrap`}>
                        <span className="text-white">100% </span> Willkommen {" "}
                        <span className="text-white"> in </span> IDSW_online
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="flex-1 flex-row font-poppins font-semibold ss:text-[92px] 
                    text-[72px] text-white ss:leading-[100px] leading-[75px] z-[3] text-center p-3">
                        <AnimatedTitle text="IDSW_online" style="text-bg1 "/>
                    </div>
                    <div className="absolute right-[20%] top-[50%] ss:flex sm:hidden  hidden md:mr-4 mr-0">
                        <GetStarted/>
                    </div>
                </div>
                <p className=" font-poppins font-semibold mt-3 ss:text-[28px]
                    text-[20px] text-white text-center ss:leading-[70px] 
                    leading-[30px] w-full md:text-nowrap">
                    Institut der sicherte Weg
                </p>
            </div>

        </section>
    )
}

export default Header;