import React from "react";
import DynamicComponent from "../DynamicComponent";
import Styles from "./Layout.module.scss";
import SbEditable from "storyblok-react";

const Layout = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={Styles["container"]}>
        {blok.bloks.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </SbEditable>
  );
};

export default Layout;
