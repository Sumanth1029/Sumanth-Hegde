import React from "react";

import { render } from "storyblok-rich-text-react-renderer";

const Richtext = ({ document }) => {
  return <>{render(document)}</>;
};

export default Richtext;
