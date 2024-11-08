import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>ASKAI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello Dev</span>
          </p>
          <p>How can I Help You Today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to visit on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept : Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding techniques for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="enter a Prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            AskAI may display inaccurate info , including about people ,so
            double-check its responses.Your privacy and AskAI Apps.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;