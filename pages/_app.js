import "styles/normalize.css";
import "styles/globals.css";
import Layout from "components/common/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;