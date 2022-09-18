import React from 'react'
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button'
import service from '../../common/images/justStand.jpg';
import './services.scss';


const Services = () => {
  const { ref,inView } = useInView();

  return (
    <div className='services'>
        <div className='services-left'>
        <div className="title">
          <span className={inView? "h1 h1-anim":"h1"} ref={ref}>Hip</span>
          <span className={inView? "h1 h1-anim":"h1"}>& Funky</span>
          <span className={inView? "p p-anim":"p"}>We try new things</span>
        </div>
        <p>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        <Button text={`OUR SERVICES`} link={`#service`}/>
        </div>
        <div className='service-image'>
            <img src={service} alt=''/>
        </div>
    </div>
  )
}

export default Services