import { useRouter } from "next/router";
import { useEffect } from "react";
import Mainpage from "./mainpage";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Mainpage></Mainpage>
    </>
  );
};

Home.getInitialProps = async (ctx: { pathname: any }) => {
  const pathname = ctx.pathname;

  return { pathname };
};

export default Home;
