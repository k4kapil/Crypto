import React from "react";
import "./Footer.css";
import EmailIcon from "../../Assets/Emailicon.png"
import FbIcon from "../../Assets/FbIcon.png"
import InstagramIcon from "../../Assets/InstagramIcon.png"
import SlackIcon from "../../Assets/SlackIcon.png"

const Footer = () => {
  return (
    <div className="footer">
      <h2>Welcome to Our Crypto-App</h2>
      <div className="infoText">
      Your go-to source for cryptocurrency news! 
      Explore breaking stories, in-depth analysis,
       and global trends. Stay informed with our user-friendly app
       , covering all aspects of the crypto world.
        Whether you're an investor or enthusiast,
         we've got you covered!
      </div>
      <div className="menuItems">
        <li>
          <ul>Trending Currency</ul>
          <ul>Crypto Exchange</ul>
          <ul>Crypto News</ul>
          <ul>Defi</ul>
        </li>
      </div>
      <div className="socialIcons">
      <img src={FbIcon} alt=""/>
      <img src={InstagramIcon} alt=""/>
      <img src={EmailIcon} alt=""/>
      <img src={SlackIcon} alt=""/>
      </div>
      <div className="Playstore">
        <a href="/" tabIndex="0"><img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
        <a href="/" tabIndex="0"><img className="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
      </div>
    </div>
  );
};

export default Footer;
