import Button from "./Button";
import styles from "../styles";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import AnimateOnScroll from "./AnimateOnScroll";
const Debuter=()=>{
    const [api, contextHolder] = notification.useNotification();
    
    const openNotification = () => {
        api.open({
            message: 'Bienvenue sur notre Site',
            description:
                'Nous sommes tres heureux de vous compte parmi nos menbres',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        })
    };
    return(
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col  bg-black-gradient rounded-[20px]`}>
        {contextHolder}
        <div className="flex-1 flex flex-col ">
            <AnimateOnScroll>
                <h2 className={styles.heading2}>Aller essayer nos services dés Maintenant</h2>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everythings you need to start and grow you German skills anywhere on the planet.</p>
            </AnimateOnScroll>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <AnimateOnScroll>
                 <Button handleClick={()=>openNotification()} text="Willkommen bei IDSW"/>
            </AnimateOnScroll>
        </div>
    </section>
)}
export default Debuter;