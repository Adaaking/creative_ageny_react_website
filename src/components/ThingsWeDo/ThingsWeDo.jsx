import React from "react";
import { useInView } from "react-intersection-observer";
import Button from "../Button/Button";
import things from '../../common/images/services.webp'
import './thingswedo.scss'

const ThingsWeDo = () => {  
  const { ref,inView } = useInView();
  return (
    <div className="thingswedo" id="service">
      <div className="things-image">
        <img src={things} alt="" />
      </div>
      <div className="thingswedo-right">
        <div className="title" ref={ref}>
          <span className={inView? "h1 h1-anim":"h1"}>Things</span>
          <span className={inView? "h1 h1-anim":"h1"}>& We do</span>
          <span className={inView? "p p-anim":"p"}>We exist to create</span>
        </div>
        <p>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        <Button text={`GET IN TOUCH`} link="#contact"/>
      </div>
    </div>
  );
};

export default ThingsWeDo;
