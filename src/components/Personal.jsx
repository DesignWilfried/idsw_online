import { enseignants } from "../constant";
import styl from "../styl";
import Feedback from "./Feedback";
import AnimateOnScroll from "./AnimateOnScroll";


const Personal=()=>(
    <section id="Contact" className={`${styl.paddingY} ${styl.flexCenter} w-full flex-col relative`}>
        <div className="absolute z-[0] w-[70%] h-[500px] -top-[10%] -right-[50%] rounded-full blue__gradient"/>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 relative z-[1]">
            <AnimateOnScroll style="w-full">
                <h1 className={`${styl.heading2} text-gradient`}>Que dire du personnel enseignant ?</h1>
            </AnimateOnScroll>
           <div className="w-full md:mt-0 mt-6">
            <AnimateOnScroll>
                <p className={`${styl.paragraph} text-left `}>
                    Nous mettons à votre disposition les meilleurs apprenants issus des grandes écoles de langue du pays.
                     En fin de formation, les étudiants désireux de prodiguer des cours en langue allemande peuvent ainsi
                      se rapprocher de nous.
                </p>
            </AnimateOnScroll>  
           </div>
        </div>
        <div className="flex flex-wrap md:justify-between justify-center w-full feedback-container relative z-[1]">
            {enseignants.map((e)=>(
                <Feedback key={e.id} {...e}/>
            ))}
        </div>
    </section>
)

export default Personal;