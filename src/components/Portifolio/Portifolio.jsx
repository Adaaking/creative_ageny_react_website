import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { portfolio } from "../../common/data";
import Images from './Images'
import "./portifolio.scss";
import { HashLink as Link } from "react-router-hash-link";


const Portifolio = () => {
  const [pindex, setPindex] = useState(null);
  console.log(pindex);
  const { ref, inView } = useInView();
  return (
    <div className="portfolio" id="portfolio">
      <div className="port-latest">
        <div className="title" ref={ref}>
          <span className={inView ? "h1 h1-anim" : "h1"}>Latest</span>
          <span className={inView ? "h1 h1-anim" : "h1"}>Creations</span>
          <span className={inView ? "p p-anim" : "p"}>
            We make beautiful things
          </span>
        </div>
        <p>
          Focus infographic venture business model canvas gamification
          ecosystem. Business plan gamification user experience low hanging
          fruit twitter. Metrics research & development market paradigm shift
          growth hacking disruptive user experience iPad social media angel
          investor alpha. Social proof lean startup alpha scrum project
          non-disclosure agreement.
        </p>
      </div>
      {portfolio.map((port) => {
        const { id, title, desc, imageUrl } = port;
        return (
          <article key={id} className="port-item" onClick={() => setPindex(id)}>
            <img src={imageUrl} alt="" />
            <div className="portifolio-title">
              <div className="border">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          </article>
        );
      })}
      {pindex&&<Images pindex={pindex} setPindex={setPindex}/>}
    </div>
  );
};

export default Portifolio;
