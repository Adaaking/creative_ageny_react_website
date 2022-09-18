import React from "react";
import { extras } from "../../common/data";
import './extras.scss'
const Etras = () => {
  return (
    <div className="extras">
        {extras.map((extra,index) => {
          return (
            <div className="extra"key={index} >
              <h1>{extra.number}</h1>
              <p>{extra.desc}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Etras;
