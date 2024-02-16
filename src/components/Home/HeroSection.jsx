import React, { Fragment } from "react";
import "./HeroSection.css";
import heroBg from "../../assets/heroBg.png";
import exchange from "../../assets/exchange.png";
import casino from "../../assets/live.png";
import tennis from "../../assets/v.png";
import virtualSport from "../../assets/virtualSport.png";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineSportsFootball } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="heroBg">
        <img src={heroBg} alt="heroBg" />
      </div>

      <div className="exchange-casino">
        <button className="exchangeBtn">
          <img src={exchange} alt="Exchange btn" />
          <p>Exchange</p>
        </button>
        <button className="casinoBtn">
          <img src={casino} alt="casino" />
          <p>Exchange</p>
        </button>
      </div>
      <div className="gameType">
        <button>
          <FaRegPlayCircle />
          <p>In-Play</p>
        </button>
        <button>
          <MdOutlineSportsCricket />
          <p>Cricket</p>
        </button>
        <button>
          <MdOutlineSportsSoccer />
          <p>Soccer</p>
        </button>
        <button>
          <img src={tennis} alt="tennis" />
          <p>Tennis</p>
        </button>
        <button>
          <img src={virtualSport} alt="virtualSport" />
          <p>Virtual Sports</p>
        </button>
        <button>
          <MdOutlineSportsFootball />
          <p>Sport-Book</p>
        </button>
      </div>
    </Fragment>
  );
};

export default HeroSection;
