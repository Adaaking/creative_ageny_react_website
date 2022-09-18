import React from "react";
import { useInView } from "react-intersection-observer";
import "./clients.scss";

const Clients = () => {
  const {ref,inView} = useInView()
  return (
    <div className="clients">
      <div className="title" ref={ref}>
        <span className={inView?"h1 h1-anim":"h1"}>Our clients</span>
        <span className={inView?"h1 h1-anim":"h1"}>love our work</span>
        <p className={inView?"p p-anim":"p"}>But don't jsut take our words for it...</p>
      </div>
      <div>
        <p className="">
          ABC Agency our the best. Not only did they deliver my work on time,
          they even walked my dog when I was out of town” A Smith – Neighbour
        </p>
        <p>
          “I don’t like people, but I make an exception for ABC Agency. They’re
          pretty damn cool.” Brian Jones, America Big Corporation
        </p>
      </div>
    </div>
  );
};

export default Clients;
