import React, { useEffect, useState } from "react";
import { portfolio } from "../../common/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import "../Header/header.scss";
const Images = ({ pindex,setPindex }) => {
  const [index, setIndex] = useState(pindex);

  const handleRight = () => {
    if (index < portfolio.length) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  };
  const handleLeft = () => {
    if (index > 1) {
      setIndex(index - 1);
    } else {
      setIndex(portfolio.length);
    }
  };
  return (
    <div className="Image">
      <div className="image-container">
        {portfolio.map((port) => {
          const { id, imageUrl } = port;
          let position = "nextSlide";
          if (index === id) {
            position = "active-anim";
          }
          if (
            id === index - 1 ||
            (index === 0 && id === portfolio.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={`image-item ${position}`}>
              <img src={imageUrl} alt="" />
            </article>
          );
        })}

        <div className="btm-image">
          {portfolio.map((port) => {
            return (
              <div className={port.id === index ?"btm-image-item image-back":"btm-image-item"} onClick={() => setIndex(port.id)}>
                <img src={port.imageUrl} alt="" />
              </div>
            );
          })}
        </div>
        <button className="prev" style={{ left:"10%"}} onClick={handleLeft}>
          <FiChevronLeft className="icon" />
        </button>
        <button className="next" style={{ right:"10%"}}>
          <FiChevronRight className="icon" onClick={handleRight} />
        </button>

        <div className="close-icon">
        <IoCloseSharp className="cl-icon" onClick={()=>setPindex(null)}/>
      </div>
      </div>
    </div>
  );
};

export default Images;
