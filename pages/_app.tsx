import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/Common/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  console.log("PP: ", pageProps);
  return pageProps.pathname === "/" ||
    pageProps.pathname === "/login" ||
    pageProps.pathname === "/register" ? (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  ) : (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

App.getInitialProps = async (context: { ctx: any; Component: any }) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    // Component (pages 폴더에 있는 컴포넌트)에 getInitialProps가 있다면
    pageProps = (await Component.getInitialProps(ctx)) || {};

    return { pageProps };
  }
};
export default App;
