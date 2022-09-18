import Button from "../Button/Button";
import React from "react";
import design from '../../common/images/creative-design.webp'
import './creative.scss'
import { useInView } from "react-intersection-observer";
const Creative = () => {
  const {ref,inView} = useInView();
  return (
    <div className="creative" id="creative">
      <div className="image">
        <img src={design} alt=""/>
      </div>
      <div className="creative-right">
        <div className="title" ref={ref}>
          <span className={inView? 'h1 h1-anim':'h1'}>Creative</span>
          <span className={inView? 'h1 h1-anim':'h1'}>& Fresh</span>
          <span className={inView? 'p p-anim':'p'}>our digital agency</span>
        </div>
        <div>
          <p>Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.</p>
        </div>
        <Button text={`VIEW PORTIFOLIO`} link={`#portfolio`}/>
      </div>
    </div>
  );
};

export default Creative;
