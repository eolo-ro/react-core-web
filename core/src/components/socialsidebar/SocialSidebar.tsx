import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import styles from "./SocialSidebar.module.css";
import React from "react";
type Props = {};

const SocialSidebar = (props: Props) => {
  return (
    <div>
      <div className={styles.sidebar}>
        <a href="https://www.facebook.com/">
          <BsFacebook className={styles.icon} />
        </a>
        <a href="https://www.twitter.com/">
          <BsTwitter className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
