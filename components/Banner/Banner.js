import React from "react";
import SbEditable from "storyblok-react";
import Richtext from "../Richtext";
import Styles from "./Banner.module.scss";

const Banner = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={`${Styles["container"]} align-${blok.align}`}>
        {blok.title && (
          <div className={Styles["title"]}>
            <h2>{blok.title}</h2>
          </div>
        )}
        <div className={Styles["desc"]}>
          <Richtext document={blok.description} />
        </div>
      </div>
    </SbEditable>
  );
};

export default Banner;
