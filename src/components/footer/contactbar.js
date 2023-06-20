import React from "react";


const ContactBar = () => {
  return (
    <div className="contactbar">
      <a href="https://github.com/SaxyBarry">
        <img src={require("../../assets/github-logo_50x50.png")} alt="GitHub"></img>
      </a>
      <a href="https://www.linkedin.com/in/austinparks2/">
        <img
          src={require("../../assets/linked.png")}
          alt="LinkedIn"
        ></img>
      </a>
      <a href="https://open.spotify.com/user/austinparks207">
        <img
          src={require("../../assets/file-spotify-logo-png-4_1_50x50.png")}
          alt="Spotify"
        ></img>
      </a>
      <a href="https://leetcode.com/Axomoxoa/">
        <img src={require("../../assets/LeetCode_logo_black_50x50.png")} alt="LeetCode"></img>
      </a>
    </div>
  );
};

export default ContactBar;
