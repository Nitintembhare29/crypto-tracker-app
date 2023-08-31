import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://facebook.com" target='blank'>
          <FacebookIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com" target='blank'>
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com" target='blank'>
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;