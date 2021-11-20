import React from "react";
import SbEditable from "storyblok-react";
import Styles from "./Footer.module.scss";

const Footer = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={Styles.container}>
        <div className="container">
          <img
            className={Styles.logo}
            width={50}
            height={50}
            src={blok.logo.filename}
          />
          <div className={Styles.title}>{blok.title}</div>
          <ul>
            {blok.socialLinkOuts.map((socialLink) => (
              <li key={socialLink._uid}>
                <a
                  className={Styles.socialLink}
                  href={
                    socialLink.socialMediaLink.cached_url.endsWith("@gmail.com")
                      ? "mailto:" + socialLink.socialMediaLink.cached_url
                      : socialLink.socialMediaLink.cached_url
                  }
                >
                  <img
                    width={40}
                    height={40}
                    src={socialLink.socialMediaIcon.filename}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SbEditable>
  );
};

export default Footer;
