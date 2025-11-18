import styles from "../styles";
import { logo } from "../assets";
import { footerLinks,socialMedia } from "../constant";
import AnimateOnScroll from "./AnimateOnScroll";

const Footer=()=>(
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
            <AnimateOnScroll>
                <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
            </AnimateOnScroll>
                <AnimateOnScroll>
                    <p className={`${styles.paragraph} mt-4 max-w-[310px] text-gradient`}>Institut der sicherte Weg</p>
                </AnimateOnScroll>  
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {
                footerLinks.map((footerLink)=>(
                    <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerLink.title}
                        </h4>
                        <AnimateOnScroll>
                            <ul className="list-none mt-4">
                                {
                                    footerLink.links.map((link,index)=>(
                                        <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ${index!==footerLink.links.lenght-1?"mb-4":'mb-0'} hover:text-secondary cursor-pointer`}>
                                        <a href={link.link} target="_blanc">{link.name}</a> 
                                        </li>
                                    ))
                                }
                            </ul>
                        </AnimateOnScroll>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            2025 IDSW. All Right Reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social,index)=>(
                <img key={social.id} src={social.icon} alt={social.id}
                className={`${index===socialMedia.lenght-1?'mr-0':"mr-4"} w-[21px] h-[21px] object-contain cursor-pointer`}
                />
            ))}
        </div>
      </div>
    </section>
)
export default Footer;