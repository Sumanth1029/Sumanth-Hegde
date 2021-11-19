import React from "react";
import Styles from "./Button.module.scss";

const Button = ({ blok }) => {
  return <div className={Styles["button"]}>{blok.ctaLabel}</div>;
};

export default Button;
