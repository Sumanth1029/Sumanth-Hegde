import React from "react";
import SbEditable from "storyblok-react";
import Styles from "./Image.module.scss";

const Image = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={Styles["container"]}>
        {blok.image &&
        blok.image.filename &&
        blok.image.filename.endsWith("svg") ? (
          <img
            src={blok.image.filename}
            className="img-fluid"
            alt={blok.image.alt}
            width={blok.width}
            height={blok.height}
          />
        ) : (
          <img
            src={blok.image.filename + "/m/filters:format(webp)"}
            alt={blok.image.alt}
            className="img-fluid"
            width={blok.width}
            height={blok.height}
          />
        )}
      </div>
    </SbEditable>
  );
};

export default Image;
