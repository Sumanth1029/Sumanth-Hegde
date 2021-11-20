import React from "react";
import Styles from "./Button.module.scss";

const Button = ({ blok }) => {
  return (
    <div className={Styles["container"]}>
      {blok.link && blok.link.cached_url && (
        <a
          href={
            blok.link.cached_url.endsWith("@gmail.com")
              ? "mailto:" + blok.link.cached_url
              : blok.link.cached_url
          }
        >
          <div className={Styles["button"]}>{blok.ctaLabel}</div>
        </a>
      )}
    </div>
  );
};

export default Button;
