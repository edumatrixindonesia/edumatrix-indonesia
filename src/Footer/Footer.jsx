import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          />
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <img
                  className="logo-edm-footer"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/logo-footer-400x225.png"
                  alt=""
                />
              </a>
            </div>
            <div className="footer-menu">
              {/* <h2 className="footer-menu-name">Edumatrix Indonesia</h2> */}
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a className="belajar-personal" href="#">
                    Ingin belajar secara personal bersama Master Teacher
                    berkompetensi tinggi? Edumatrix jawabannya.{" "}
                  </a>
                </li>
                <hr />
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a className="bimbel-diy" href="#">Menyediakan les privat online untuk seluruh Indonesia dan offline untuk area Daerah Istimewa Yogyakarta (DIY).</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Yogyakarta</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Office</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">
                    <strong>Ruko Permai Monjali</strong>
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="https://www.google.com/maps/place/Edumatrix+Indonesia+-+Bimbel+Masuk+PTN/@-7.7695176,110.365996,17z/data=!3m1!4b1!4m6!3m5!1s0xa061035ebad1e1f1:0x9f455d43288cba88!8m2!3d-7.7695229!4d110.3685709!16s%2Fg%2F11sds4z_21?entry=ttu">
                    Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati, Sleman,
                    Yogyakarta 55241
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Konsultasi Program:</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak%20Tisha%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih.">
                    0856-0042-2188 (Kak Tisha)
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih.">
                    0812-1636-5729 (Kak Aulia)
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak%20Eka%2C%20Saya%20ingin%20bertanya%20mengenai%20Bimbel%20di%20Edumatrix%20Indonesia%20Terima%20kasih.">
                    0812-1552-3902 (Kak Eka)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Member of :</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                {/* <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Support Center
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Service Status
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#">Customers</a>
                </li> */}

                <img
                  className="logo-hilpi"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/hilpi.jpg"
                  alt=""
                />
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Edumatrix Indonesia adalah anggota HILPI</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"></h2>
              {/* <a
                className="footer-call-to-action-button button"
                href="tel:085600422188"
                target="_self"
              >
                {" "}
                <FontAwesomeIcon className="icon-on-footer" icon={faPhone} />
                <span className="no-hp">0812-1636-5729</span>{" "}
              </a> */}
              {/* <a
                className="footer-call-to-action-button button"
                href="edumatrix.id@gmail.com"
                target="_self"
              >
                {" "}
                <FontAwesomeIcon className="icon-on-footer" icon={faEnvelope} />
                <span className="email">edumatrix.id@gmail.com</span>{" "}
              </a> */}
            </div>
          </div>
          <div className="footer-social-links">
            {" "}
            <svg
              className="footer-social-amoeba-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 236 54"
            >
              <path
                className="footer-social-amoeba-path"
                d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
              />
            </svg>
            <a
              className="footer-social-link linkedin"
              href="https://twitter.com/Edumatrix_ID"
              target="_blank"
            >
              <span className="hidden-link-text">Twitter</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <a href="https://twitter.com/Edumatrix_ID">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </svg>
            </a>
            <a
              className="footer-social-link twitter"
              href="https://www.instagram.com/edumatrixindonesia/"
              target="_blank"
            >
              <span className="hidden-link-text">Instagram</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
              >
                <a href="https://www.instagram.com/edumatrixindonesia/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </svg>
            </a>
            <a
              className="footer-social-link youtube"
              href="https://www.youtube.com/@edumatrixindonesia/videos"
              target="_blank"
            >
              <span className="hidden-link-text">Youtube</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <a href="https://www.youtube.com/@edumatrixindonesia/videos">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </svg>
            </a>
            <a
              className="footer-social-link github"
              href="https://www.tiktok.com/@edumatrixindonesia"
              target="_blank"
            >
              <span className="hidden-link-text">Github</span>
              <svg
                className="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <a href="https://www.tiktok.com/@edumatrixindonesia">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="#" target="_self">
                {" "}
                ©2023. | Edumatrix Indonesia | All rights reserved.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
