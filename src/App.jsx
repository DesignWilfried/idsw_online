import styles from './styles';
import '@ant-design/v5-patch-for-react-19';
import './swiperStyle.css'
import './index.css'
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Performance from './components/Performance.jsx'
import Inscription from './components/Inscription.jsx'
import Traduction from './components/Traduction.jsx'
import Personal from './components/Personal.jsx';
import {Clients} from './components/Clients.jsx';
import Debuter from './components/Debuter.jsx';
import Footer from './components/Footer.jsx';
import SwiperCard from './components/SwiperCard.jsx'
import AnimateOnScroll from './components/AnimateOnScroll.jsx';
import "./App.css"
const App=()=> {

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} fixed left-0 right-0 z-50 shadow-md md:mb-10`}>
        <div className={`${styles.boxWidth}`}>
          <AnimateOnScroll>
            <Navbar/>
          </AnimateOnScroll>
        </div>
      </div>
      <div className={`bg-primary${styles.flexStart} mt-10 pb-5`}>
        <div className={`${styles.boxWidth}`}>
          <Header/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} datacenter`}>
          <SwiperCard/>
          <Performance/>
          <Inscription/>
          <Traduction/>
          <Personal/>
          <Clients/>
          <Debuter/>
          <Footer/> 
        </div>
      </div>
    </div>
  )
}

export default App
