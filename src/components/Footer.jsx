import React from "react";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full py-6 bg-primary text-white text-sm`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="ml-4 text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white">Gideon Amha Gebremedhin</span>. All
            rights reserved.
          </p>
        </div>
        <div className="flex items-center text-white">
          <a
            href="https://github.com/yourusername"
            className="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gideon-amha-g/"
            className="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:gideonamha@gmail.com"
            className="mx-2"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://x.com/GideonAmha"
            className="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
