import { features } from "../constant"
import styl,{layout} from "../styl"
import Button from "./Button"
import AnimateOnScroll from "./AnimateOnScroll"

const FeatureCard=({icon,title,content,index})=>(
    <AnimateOnScroll>
        <div className={`flex flex-row w-full p-6 rounded-[20px] ${index==features.Length-1?"mb-6":"mb-0"} feature-card cursor-pionter`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styl.flexCenter} bg-dimBlue`}>
                <img src={icon} alt="icon" className="w-50% h-50% object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
                <p className="font-poppins font-normal text-white text-[16px] leading-[24px] mb-1">{content}</p>
            </div>
        </div>
    </AnimateOnScroll>
    
    );


const Performance=()=>{
    return (
        <section id="features" className={`${layout.section} sm:flex-col`}>
            <div className={layout.sectionInfo}>
                <AnimateOnScroll>
                    <h2 className={`${styl.heading2}`}>Votre parcours est prise en main,
                        <br className="sm:block br-hidden"/> par des professionnelle soyez assurer
                    </h2>
                </AnimateOnScroll>
                <AnimateOnScroll>
                    <p className={`${styl.paragraph} max-w-[490px] mt-5 mb-3`}>
                        Nous sommes un centre qualifier dans la prodigation des cours,traduction de leur document et leur conseilles dans les etapes a suivant jusqu'a l'obtention de leur visa pour l'allemangne
                    </p>
                </AnimateOnScroll>
                
                <Button styl="mt-5" text="WillKommen bei IDSW_online"/>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature,index)=>(
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
            </div>
        </section>
    )
}

export default Performance;
