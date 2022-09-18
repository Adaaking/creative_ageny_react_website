import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./header.scss";
import { headers } from "../../common/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

const Header = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    let slider = setInterval(() => {
      handleRight();
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  const handleRight = () => {
    if (index < headers.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(headers.length - 1);
    }
  };
  return (
    <div className="header" id="head">
      <Navbar />
      {headers.map((header, indx) => {
        const { id, title1, title2, desc, image } = header;

        let position = "nextSlide";
        if (indx === index) {
          position = "active-anim";
        }
        if (
          indx === index - 1 ||
          (index === 0 && indx === headers.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div className={`header-item ${position}`} key={id}>
            <img src={image} alt="" />
            <div className="header-text">
              <span className="h-title">{title1}</span>
              <span className="h-title">{title2}</span>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
      <button className="prev" onClick={handleLeft}>
        <FiChevronLeft className="icon" />
      </button>
      <button className="next">
        <FiChevronRight className="icon" onClick={handleRight} />
      </button>
    </div>
  );
};

export default Header;
