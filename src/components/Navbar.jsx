import React, { useState } from "react";
import {close,idsw_online,menu} from '../assets'
import { DownOutlined,SettingOutlined } from "@ant-design/icons";
import { Dropdown,Space } from "antd";
import { navLinks } from "../constant";

const items=[
    {
        key: '1',
        label:(
            <a href="#Inscription" target="_blank" rel="noopener noreferrer">Inscription</a>
        )
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#Traduction">
        Traduction
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#Contact">
        Performance
      </a>
    ),
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
]

const Navbar =()=>{
    const [toggle,setToggle]=useState(false)
    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={close} alt="idsw" className='w-[30px] h-[32px]'/>
            <ul className="list-none sm:flex  justify-end items-center flex-1 hidden navlong">
                {navLinks.map((nav,index)=>(
                    <li key={nav.id}
                    className={`font-poppins font-semibold cursor-pointer text-[16px] text-white 
                        ${index===navLinks.length-1 ?'mr-0':'mr-10'}`}
                    >
                        <a href={`#${nav.id}`} className="hover:text-secondary">
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-1 justify-end items-center navshort">
                <img src={toggle ? close:menu} 
                alt="menu_icon"
                className="w-[28px] h-[28px] object-contain"
                onClick={()=>setToggle((prev)=>!prev)}
                 />
                 <div className={`${toggle? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-20 
                  mx-4 my-2 min-w-[140px] rounded-xl z-[1000] sidebar`}>
                    <ul className="list-none sm:flex flex-col justify-end items-center flex-1 z-[100]">
                        {navLinks.map((nav,index)=>(
                            <li key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks-1?'mr-0':'mb-4'}`}>
                                <a href={`#${nav.id}`} onClick={()=>setToggle(false)} className="hover:text-secondary">
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                 </div>
            </div>
        </nav>
    )
}
export default Navbar;