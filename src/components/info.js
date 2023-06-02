import React from "react";
import Pic from "../../src/images/pic.jpg";
import Main from "./main";
import Footer from "./footer";
import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.png";

const Info = () => {
  return (
    <div className="info_div">
      <img src={Pic} className="profile_pic" />
      <h1 className="name_text">Laura Smith</h1>
      <p className="frotend_text">Frontend Developer</p>
      <p className="website_text">Laurasmith Website</p>
      <div className="btn_div">
        <div className="emailand_icon_div">
         
          <button className="Email_btn">
            <span> <img src={emailIcon} className="email_icon" /></span>
            Email</button>
        </div>
        <div className="linkedinand_icon_div">
         
          <button className="linkedin_btn">
          <span> <img src={linkedinIcon} className="linkedin_icon" /></span>
            Linkedin
         </button>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default Info;
