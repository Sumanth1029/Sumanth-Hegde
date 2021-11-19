import React from "react";
import SbEditable from "storyblok-react";
import DynamicComponent from "./DynamicComponent";

const ReferenceComponent = ({ blok }) => {
  let refBloks = [];
  if (blok.ref && blok.ref.content) {
    refBloks = blok.ref.content.body || [];
  }
  return (
    <SbEditable content={blok}>
      {refBloks.map((eachBlok) => (
        <div key={eachBlok._uid}>
          <DynamicComponent blok={eachBlok} />
        </div>
      ))}
    </SbEditable>
  );
};

export default ReferenceComponent;
