import React from "react";
import SbEditable from "storyblok-react";
import Image from "../../Image/Image";
import Styles from "./Card.module.scss";
import Richtext from "../../Richtext";

const Card = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={Styles["container"]}>
        <div>
          {blok.image &&
            blok.image.map((img) => (
              <div key={img._uid} className={Styles["image"]}>
                <Image blok={img} />
              </div>
            ))}
        </div>
        <div className={Styles["title"]}>{blok.title}</div>
        <div className={Styles["description"]}>
          <Richtext document={blok.description} />
        </div>
      </div>
    </SbEditable>
  );
};

export default Card;
