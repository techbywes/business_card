import React from "react";

import twitterimg from "../images/twitter-sign.png";
import facebookimg from "../images/facebook.png";
import instagramimg from "../images/instagram.png";
import githubimg from "../images/github.png";

const Footer = () => {
  return (
    <div className="footer_div">
      <footer className="footer">
        <div className="twitter_div">
          <img src={twitterimg} className="twitter_icon" />
        </div>
        <div className="facebook_div">
          <img src={facebookimg} className="facebook_icon" />
        </div>
        <div className="instagramr_div">
          <img src={instagramimg} className="instagram_icon" />
        </div>
        <div className="github_div">
          <img src={githubimg} className="github_icon" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
