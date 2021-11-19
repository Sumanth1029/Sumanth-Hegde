import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preload" href="fonts/Eurostyle" as="font" crossOrigin="" />
      </Head>

      <body>
        <Component {...pageProps} />
      </body>
    </>
  );
};

export default MyApp;
