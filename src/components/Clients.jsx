import { clients } from "../constant";
import styl from "../styl";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

export const Clients=()=>(
    
    <section id="Partenaire" className={`${styl.flexCenter} my-5 flex-col `}>
        <div className='absolute -right-1/3 -top-1/2  z-[0] h-[30%] w-[400px] right-[20%] rounded-full blue__gradient'/>
        <h1 className={`${styl.heading2} mb-3 w-full flex justify-center`}> Nos Partenaires</h1>
        <div className={`${styl.flexCenter} flex-wrap w-full`}>
            {clients.map((client,index)=>(
                <AnimateOnScroll key={client.id} style={`${styl.flexCenter} gap-5`}>
                     <motion.a 
                        whileTap={{scale:1.5}}
                        href={client.link}  className={`flex-1 z-[10] ${styl.flexCenter} z-[3] mb-5 sm:min-w-[192px] min-w-[120px] ${index==clients.length-1?"mr-0":"mr-5"}`}>
                        <img src={client.logo} alt={client.name} className={`rounded-full ${index>=clients.length-3?"sm:w-[185px] w-[100px]":"sm:w-[292px] w-[150px]"} object-contain`} />
                    </motion.a>
                </AnimateOnScroll> 
            ))}
        </div>
    </section>
)
export default Clients;