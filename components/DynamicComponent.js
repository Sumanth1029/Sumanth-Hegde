import Page from "./Page";
import Navigationbar from "./Header/Navbar";
import ReferenceComponent from "./ReferenceComponent";
import Button from "./Button/Button";
import title from "./title/title";
import Layout from "./Layout/Layout";
import Banner from "./Banner/Banner";
import CardContainer from "./CardContainer/CardContainer";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

// resolve Storyblok components to Next.js components
const Components = {
  page: Page,
  navbar: Navigationbar,
  referenceComponent: ReferenceComponent,
  button: Button,
  title: title,
  layout: Layout,
  banner: Banner,
  cardContainer: CardContainer,
  image: Image,
  footer: Footer,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
