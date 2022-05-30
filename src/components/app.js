import React, { useState } from "react";
import "../styles/app.css";
import { css } from "@emotion/css";
import Redbus from "../../public/RedbusImages/Redbus.png";
import HeroImage from "../../public/RedbusImages/heroimage2.png";
import SafetyPlus from "../../public/BusHireImages/safetyplus.svg";
import Coupen1 from "../../public/RedbusImages/Coupon1.png";
import Coupen2 from "../../public/RedbusImages/Coupon2.png";
import APS from "../../public/RedbusImages/APSRTC_1.png";
function App() {
  const [sorc, setSorc] = useState("");
  const [Dest, setDest] = useState("");
  const [dat, setDat] = useState("");
  return (
    <div className="App">
      <div
        className={css`
          flex-direction: row;
          background-color: #dc3545;
          align-items: center;
          justify-content: space-around;
          flex: 1;
        `}
      >
        <div
          className={css`
            color: white;
            justify-content: space-around;
            word-spacing: 30px;
            line-height: 18px;
            font-size: 17px;
            padding-top: 5px;
            padding-bottom: 5px;
          `}
        >
          <img
            src={Redbus}
            alt=""
            className={css`
              height: 20px;
              width: auto;
              margin-right: 10px;
              margin-top: 5px;
            `}
          />
          BUS-TICKETS POOL BUS-HIRE
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {/* header thigns */}
        <img
          style={{ width: "100%", margin: "0px" }}
          src={HeroImage}
          alt="hero "
        />
        {/* the front thing */}
        <div
          className={css`
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            top: 10ch;
            /* color: ; */
          `}
        >
          {/* search seciton start here  */}
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              gap: 10px;
              & > div {
                padding-left: 3ch;
                padding-right: 3ch;
                background: white;
              }
              #serach-button {
                color: white;
                background: red;
                width: auto;
                display: flex;
                flex-direction: row;
                align-content: center;
                justify-content: center;
              }
            `}
          >
            <input
              type={"search"}
              value={sorc}
              onChange={(temp) => setSorc(temp.target.value)}
              placeholder={"SOURCE"}
              name="fname"
            />

            <input
              type={"text"}
              value={Dest}
              onChange={(res) => setDest(res.target.value)}
              placeholder={"DESTINATION"}
              className={css`
                text-align: center;
              `}
            />
            <input
              value={dat}
              type="date"
              onChange={(date) => setDat(date.target.value)}
            />
            <button id="serach-button"> Search Bus </button>
          </div>

          {/* middle banner  section finishes here  */}

          <div
            className={css`
              margin-top: 10ch;
              /* maring-left: 10ch; */
              width: 80%;
              /* margin-left: auto;  */
              #background {
                background-color: #ddd0b8;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10ch;
                text-align: left;
                padding: 0.5ch;
                #heading {
                  font-weight: bold;
                }
                #read-more {
                  background: red;
                  width: fit-content;
                  color: white;
                  margin-left: auto;
                  padding: 1ch;
                }
              }
            `}
          >
            <div id="background">
              <img src={SafetyPlus} alt="safety plys " />
              <div>
                <div id="heading"> Introducing Safety+ program </div>
                <div>
                  A unique certification program that ensures safety in all
                  buses
                </div>
                <div id="read-more"> Know More </div>
              </div>
            </div>
          </div>
          {/* last seciont with 3 images.  */}
          <div
            className={css`
              margin-top: 5ch;
              display: flex;
              flex-direction: row;
              gap: 1ch;
            `}
          >
            <img src={APS} alt="aps profile" />
            <img src={Coupen1} alt="coupen 1 " />
            <img src={Coupen2} alt="coupen 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
