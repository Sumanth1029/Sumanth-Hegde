import React from "react";
import SbEditable from "storyblok-react";
import Card from "./Cards/Cards";
import Styles from "./CardContainer.module.scss";

const CardContainer = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={Styles["container"]}>
        <div className={Styles["title"]}>{blok.title}</div>
        <div className="row">
          {blok.cardList.length > 0 &&
            blok.cardList.map((card) => (
              <div key={card._uid} className="col-md-4">
                <Card blok={card} />
              </div>
            ))}
        </div>
      </div>
    </SbEditable>
  );
};

export default CardContainer;
