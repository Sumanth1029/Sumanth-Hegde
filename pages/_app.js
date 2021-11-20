import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
};

export default MyApp;
