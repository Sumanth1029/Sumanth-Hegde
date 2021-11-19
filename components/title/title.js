import React from "react";
import Styles from "./title.module.scss";
import SbEditable from "storyblok-react";

const title = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={Styles["container"]}>
        <div className={Styles["heading"]}>{blok.heading}</div>
        <div className={Styles["subHeading"]}>{blok.subHeading}</div>
      </div>
    </SbEditable>
  );
};

export default title;
