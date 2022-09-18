import React from 'react'
import './branding.scss'
import svg1 from '../../common/images/microwave.svg';
import svg2 from '../../common/images/picture.svg';
import svg3 from '../../common/images/interface34.svg';
import { useInView } from 'react-intersection-observer';
const Brading = () => {
  const {ref, inView} = useInView();
  return ( 
    <div className='container' ref={ref}>
        <div className={inView?'branding div1':'branding'}>
            <img src={svg3} alt=""/>
            <h1>Branding</h1>
            <p style={{margin:"0 2rem"}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>
        <div className={inView?'branding div2':'branding'}>
            <img src={svg1} alt=""/>
            <h1>Web Design</h1>
            <p style={{margin:"0 2rem"}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>
        <div className={inView?'branding div3':'branding'}>
            <img src={svg2} alt=""/>
            <h1 ref={ref}>Graphic Design</h1>
            <p style={{margin:"0 2rem"}}>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>
    </div>
  )
}

export default Brading