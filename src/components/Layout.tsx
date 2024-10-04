import React from "react";
import styles from "./Layout.module.scss";
import Logo from "../../public/css_logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.desktop}>
          <h1>Computer Science Society</h1>

          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Community</li>
              <li>News & Events</li>
            </ul>
          </nav>
        </div>

        <div className={styles.mobile}>
          <h1>CSS</h1>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div>
              <div className={styles.logo}>
                <Image src={Logo} alt="UST-CSS Logo" className={styles.logo_img} />
              </div>
            </div>

            <h2 className={styles.spacer}>Computer Science Society</h2>

            <div className={styles.border}>
              <h2>Passionately designed & developed by CSS 💻</h2>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.inner_left}>
              <ul>
                <li className={styles.text}>UST Computer Science Society</li>
                <li>About Us</li>
                <li>Community</li>
                <li>News & Events</li>
              </ul>
            </div>
            <div className={styles.inner_right}>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </li>

                <li>
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </li>

                <li>
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </li>

                <li>
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
