import styl from "../styl"
import React from "react";
import { arrowUp } from "../assets"

const GetStarted=()=>(
    <div className={`${styl.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styl.flexCenter} flex-col bg-blue w-[100%] h-[100%] rounded-full`}>
            <div className={`${styl.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain" />
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
)

export default GetStarted;