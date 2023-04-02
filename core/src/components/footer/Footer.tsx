import styles from "./Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      {/* Footer content */}
      <div className={styles.footerPadding}>
        {/* Top section */}
        <div className={styles.footerTop}>
          {/* Logo */}
          <h2 className={styles.footerLogo}>Site</h2>
          {/* Links */}
          <div className={styles.footerLinks}>
            {/* Contact info */}
            <div className={styles.footerLinksDiv}>
              <h4>Get in touch</h4>
              <p>contact@site.com</p>
            </div>
            {/* Social media links */}
            <div className={styles.footerLinksDiv}>
              <h4>Connect</h4>
              <div className={styles.socialmedia}>
                <a href="https://www.linkedin.com">
                  <BsLinkedin className={styles.icon} />
                  LinkedIn
                </a>
                <a href="https://github.com/">
                  <BsGithub className={styles.icon} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <hr />
        <div className={styles.footerBelow}>
          <div className={styles.footerCopyright}>
            {/* Copyright info */}
            <p>@{new Date().getFullYear()} Site - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
