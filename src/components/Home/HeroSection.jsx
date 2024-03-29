import React, { Fragment, useEffect, useState } from "react";
import "./HeroSection.css";
import whiteLogo from "../../assets/whiteLogo.png";
import heroBg from "../../assets/heroBg.png";
import exchange from "../../assets/exchange.png";
import casino from "../../assets/live.png";
import teenPati1 from "../../assets/teenpati1.png";
import teenPati2 from "../../assets/teenpati2.png";
import teenPati3 from "../../assets/teenpati3.png";
import teenPati4 from "../../assets/teenpati4.png";
import topProvider from "../../assets/topProvider.png";
import provider1 from "../../assets/provider1.png";
import provider2 from "../../assets/provider2.png";
import provider3 from "../../assets/provider3.png";
import provider4 from "../../assets/provider4.png";
import provider5 from "../../assets/provider5.png";
import provider6 from "../../assets/provider6.png";
import virtualSport from "../../assets/virtualSport.png";
import visual1 from "../../assets/visual1.png";
import sportBook from "../../assets/sportBook.png";
import sport1 from "../../assets/sport1.png";
import sport2 from "../../assets/sport2.png";
import sport3 from "../../assets/sport3.png";
import sport4 from "../../assets/sport4.png";
import sport5 from "../../assets/sport5.png";

import visual2 from "../../assets/visual2.png";
import visual3 from "../../assets/visual3.png";
import visual4 from "../../assets/visual4.png";

import responsible1 from "../../assets/responsible1.png";
import responsible2 from "../../assets/responsible2.png";
import responsible3 from "../../assets/responsible3.png";
import responsible4 from "../../assets/responsible4.png";

import secure from "../../assets/secure.png";

import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";

import footerLogo from "../../assets/footerLogo.png";

import blackLogo from "../../assets/blackLogo.png";

import netbanking from "../../assets/netbanking.png";
import visa from "../../assets/visa.png";
import up from "../../assets/up.png";
import transfer from "../../assets/transfer.png";

import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineSportsFootball } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";

import { MdSearch } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
// import blackLogo from "../../assets/blackLogo.png";
import { MdLightMode } from "react-icons/md";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let newSize = "";

      if (width < 768) {
        newSize = "Small";
      }

      setScreenSize(newSize);
    }

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Initial call to set screen size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const changeTheme = () => {
    setDarkMode((prevState) => !prevState);

    document.body.style.background = darkMode ? "#000000" : "#ffffff";
  };
  document.body.style.background = darkMode ? "#000000" : "#ffffff";
  return (
    <Fragment>
      <div className="navbar">
        <div className="inputSection">
          <input type="text" placeholder="Home" />
          <MdSearch className="icon" />
        </div>

        <div className="logoSection">
          <img src={whiteLogo} alt="logo" className="navLogo" />
          <div className="trapezoid"></div>
        </div>

        <div className="navButtonsSection">
          <button>Deposit</button>
          <button>Bal. 100.0</button>
          <button>Exp. 00.0</button>
          <button className="btn_last">
            <IoPersonSharp />
          </button>
          <button onClick={changeTheme}>
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>
      <div className="heroBg">
        <img src={heroBg} alt="heroBg" />
      </div>

      <div className="exchange-casino">
        <div className={darkMode ? "exchangeBtnDark" : "exchangeBtnLight"}>
          <button className="exchangeBtn">
            <img src={exchange} alt="Exchange btn" />
            <p className={darkMode ? "exchangeBtnDark" : "exchangeBtnLight"}>
              Exchange
            </p>
          </button>
        </div>
        <div className={darkMode ? "exchangeBtnDark" : "exchangeBtnLight"}>
          <button className="casinoBtn">
            <img src={exchange} alt="casino" />
            <p className={darkMode ? "casinoBtnDark" : "casinoBtnLight"}>
              Live Casino
            </p>
          </button>
        </div>
      </div>
      <div className="gameType">
        <div className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
          <button className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
            <FaRegPlayCircle />
            <p>In-Play</p>
          </button>
        </div>
        <div>
          <button className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
            <MdOutlineSportsCricket />
            <p>Cricket</p>
          </button>
        </div>
        <div>
          <button className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
            <MdOutlineSportsSoccer />
            <p>Soccer</p>
          </button>
        </div>
        <div>
          <button className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
            <MdSportsTennis />
            <p>Tennis</p>
          </button>
        </div>
        <div>
          <button className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
            <img src={virtualSport} alt="virtualSport" />

            <p>Virtual Sports</p>
          </button>
        </div>
        <div>
          <button className={darkMode ? "gameTypeDark" : "gameTypeLight"}>
            <MdOutlineSportsFootball />
            <p>Sport-Book</p>
          </button>
        </div>
      </div>
      <div className="teenPatigame">
        <div>
          <img src={teenPati1} alt="teenPati1" />
        </div>
        <div>
          <img src={teenPati2} alt="teenPati2" />
        </div>
        <div>
          <img src={teenPati3} alt="teenPati3" />
        </div>
        <div>
          <img src={teenPati4} alt="teenPati4" />
        </div>
      </div>

      {screenSize === "Small" ? (
        <Fragment>
          <div className="cricketSection">
            <div className="cricketHeading">
              <MdOutlineSportsCricket />
              <p>Cricket</p>
            </div>
            <div className="cricketContent">
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Twenty20 Big Bash
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cricketSection">
            <div className="cricketHeading">
              <MdSportsTennis />
              <p>Tennis</p>
            </div>
            <div className="cricketContent">
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cricketSection">
            <div className="cricketHeading">
              <MdOutlineSportsSoccer />
              <p>Soccer</p>
            </div>
            <div className="cricketContent">
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                  <div className="blueScore">--</div>
                  <div className="pinkScore">--</div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="cricketSection">
            <div className="cricketHeading">
              <MdOutlineSportsCricket />
              <p>Cricket</p>
            </div>
            <div className="cricketContent">
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Twenty20 Big Bash
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">-</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cricketSection">
            <div className="cricketHeading">
              <MdSportsTennis />
              <p>Tennis</p>
            </div>
            <div className="cricketContent">
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">-</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cricketSection">
            <div className="cricketHeading">
              <MdOutlineSportsSoccer />
              <p>Soccer</p>
            </div>
            <div className="cricketContent">
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">-</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
              <div className="cricketContent1">
                <div className="inPlay">
                  <div className="inPlayBtn">In-Play</div>
                  <p className={darkMode ? "scoreDark" : "scoreLight"}>
                    Canterbury Magicians Woman Vs Wellington Blaze Wome
                  </p>
                </div>
                <div className="cricketScore">
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">-</div>
                  <div className="blueScore">1.05</div>
                  <div className="pinkScore">1.05</div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <div className="topProvider">
        <div className="providerContent">
          <img src={topProvider} alt="topProvider" />
          <p className={darkMode ? "contentDark" : "contentLight"}>
            Top Providers
          </p>
        </div>
        <div className="providerImg">
          <img src={provider1} alt="provider1" />
          <img src={provider2} alt="provider2" />
          <img src={provider3} alt="provider3" />
          <img src={provider4} alt="provider4" />
          <img src={provider5} alt="provider5" />
          <img src={provider6} alt="provider6" />
        </div>
      </div>

      <div className="sportBook">
        <div className="sportBookContent">
          {/* <img src={sportBook} alt="sportBook" /> */}
          <MdOutlineSportsFootball
            className={darkMode ? "contentDark" : "contentLight"}
          />
          <p className={darkMode ? "contentDark" : "contentLight"}>MIni Game</p>
        </div>
        <div className="sportCard">
          <div className="div">
            <div className="sportCard1">
              <img src={sport1} alt="sport1" />
              <h3>Teen Patti</h3>
            </div>
          </div>

          <div className="div">
            <div className="sportCard1">
              <img src={sport2} alt="sport2" />
              <h3>Table Tennis</h3>
            </div>
          </div>

          <div className="div">
            <div className="sportCard1">
              <img src={sport3} alt="sport3" />
              <h3>Rugby League</h3>
            </div>
          </div>
          <div className="div">
            <div className="sportCard1">
              <img src={sport4} alt="sport4" />
              <h3>Chess</h3>
            </div>
          </div>
          <div className="div">
            <div className="sportCard1">
              <img src={sport5} alt="sport5" />
              <h3>Badminton</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="virtualSports">
        <div className="virtualSportContent">
          <img src={virtualSport} alt="virtualSport" />
          <p className={darkMode ? "contentDark" : "contentLight"}>
            Virtual Sports
          </p>
        </div>
        <div className="virtualSportCards">
          <div className="card1">
            <div>
              <img src={visual1} alt="visual1" />
            </div>
            <div className="card1HP">
              <h3>Football</h3>
              <p>Play Now</p>
            </div>
          </div>
          <div className="card1">
            <div>
              <img src={visual2} alt="visual2" />
            </div>
            <div className="card1HP">
              <h3>Tennis</h3>
              <p>Play Now</p>
            </div>
          </div>
          <div className="card1">
            <div>
              <img src={visual3} alt="visual3" />
            </div>
            <div className="card1HP">
              <h3>Cricket</h3>
              <p>Play Now</p>
            </div>
          </div>
          <div className="card1">
            <div>
              <img src={visual4} alt="visual4" />
            </div>
            <div className="card1HP">
              <h3>Virtual Sports</h3>
              <p>Play Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sportBook">
        <div className="sportBookContent">
          {/* <img src={sportBook} alt="sportBook" /> */}
          <MdOutlineSportsFootball
            className={darkMode ? "contentDark" : "contentLight"}
          />
          <p className={darkMode ? "contentDark" : "contentLight"}>
            Sports Book
          </p>
        </div>
        <div className="sportCard">
          <div className="div">
            <div className="sportCard1">
              <img src={sport1} alt="sport1" />
              <h3>Teen Patti</h3>
            </div>
          </div>

          <div className="div">
            <div className="sportCard1">
              <img src={sport2} alt="sport2" />
              <h3>Table Tennis</h3>
            </div>
          </div>

          <div className="div">
            <div className="sportCard1">
              <img src={sport3} alt="sport3" />
              <h3>Rugby League</h3>
            </div>
          </div>
          <div className="div">
            <div className="sportCard1">
              <img src={sport4} alt="sport4" />
              <h3>Chess</h3>
            </div>
          </div>
          <div className="div">
            <div className="sportCard1">
              <img src={sport5} alt="sport5" />
              <h3>Badminton</h3>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footerDiv">
          <div className="footerDivInner">
            <div className="footerDiv1">
              <img src={darkMode ? footerLogo : blackLogo} alt="footerLogo" />
              <div className="secureBox">
                <img src={secure} alt="secure" />
                <p className={darkMode ? "footerDark" : "footerLight"}>
                  100% SAFE Protectedconnection and encrypteddata.
                </p>
              </div>
              <h3 className={darkMode ? "footerDark" : "footerLight"}>
                Rensposible Gaming
              </h3>
              <div className="responsibleGame">
                <img src={responsible1} alt="responsible1" />
                <img src={responsible2} alt="responsible2" />
                <img src={responsible3} alt="responsible3" />
                <img src={responsible4} alt="responsible4" />
              </div>
            </div>
            <div className="footerDiv2">
              <ul className={darkMode ? "footerDark" : "footerLight"}>
                <h3>Company</h3>
                <li>Getting Started</li>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Betting Help</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footerDiv3">
              <ul className={darkMode ? "footerDark" : "footerLight"}>
                <h3>Company</h3>
                <li>Cricket</li>
                <li>Soccer</li>
                <li>Tennis</li>
                <li>Casino</li>
                <li>Election</li>
                <li>Special Market</li>
              </ul>
            </div>
            <div className="footerDiv4">
              <h3 className={darkMode ? "footerDark" : "footerLight"}>
                Follow Us
              </h3>
              <div className="socialIcon">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="insta" />
              </div>
              <h3>Payment Method</h3>
              <div className={darkMode ? "paymentDark" : "paymentLight"}>
                <img src={transfer} alt="transfer" />
                <img src={up} alt="up" />
                <img src={netbanking} alt="netbanking" />
                <img src={visa} alt="visa" />
              </div>
            </div>
          </div>
        </div>
        <p className="disclaimer">
          Disclaimer : Please note that Gambling involves a financial risk and
          could be addictive over time if not practised within limits. Only 18+
          people should use the services and should use it responsibly. Players
          should be aware of any financial risk and govern themselves
          accordingly.
        </p>
        <div className="copyRight">
          <p>
            Copyright © 2023 SportsX9® All rights Reserved. Designed and powered
            by <span>SportsX9 Terms and Condition</span> |{" "}
            <span>Rules and Regulation</span>
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default HeroSection;
