import React, { useState } from "react";
import {close,menu} from '../assets'
import { DownOutlined,SettingOutlined,SolutionOutlined,MailOutlined } from "@ant-design/icons";
import { Form,Checkbox,Modal,Button,Input } from "antd";
import { navLinks } from "../constant";
import { createStyles,useTheme } from "antd-style";
import Login from "./Login";


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
}));

const Navbar =()=>{
    //modalvalue
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
    //end modal value
    const [toggle,setToggle]=useState(false);
    const [token,setToken]=useState(`${localStorage.getItem('userToken')}`);
    
    return(
        <nav className="w-full flex py-3 justify-between items-center navbar">
            <img src={close} alt="idsw" className='w-[30px] h-[32px]'/>
            <ul className="list-none sm:flex  justify-end items-center flex-1 hidden navlong">
                {navLinks.map((nav,index)=>(
                    <li key={nav.id}
                    className={`font-poppins font-semibold cursor-pointer text-[16px] text-white 
                        ${index===navLinks.length-1 ?'mr-10':'mr-10'}`}
                    >
                        <a href={`#${nav.id}`} className="hover:text-secondary">
                            {nav.title}
                        </a>
                    </li>
                ))}
                {!token &&(
                  <li>
                  <Button type="primary" onClick={toggleModal}>Login</Button>
                </li>
                )}
                
            </ul>
            <div className="flex flex-1 justify-end items-center navshort relative">
              {token ? (<div className="">
                  <img src={toggle ? close:menu} 
                  alt="menu_icon"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={()=>{setToggle((prev)=>!prev);}}
                  />
                  <div className={`${toggle? 'flex' :'hidden'} p-6 bg-black-gradient absolute top-20 
                    mx-5 my-2 min-w-[140px] rounded-xl z-[1000] sidebar right-[3px]`}>
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
              </div>)
              :<Button type="primary" onClick={toggleModal}>Login</Button>
              }
            </div>
            <Modal
                title="Connexion"
                open={isModalOpen}
                centered
                onOk={()=>setIsModalOpen(false)}
                onCancel={()=>setIsModalOpen(false)}
                footer="IDSW"
                className={classNames}
                styles={modalStyles}
                >
                <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            </Modal>
        </nav>
    )
}
export default Navbar;