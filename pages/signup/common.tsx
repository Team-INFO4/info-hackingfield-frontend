import React from "react";

const common = () => {
  return (
    <div>
      <h1>SignUp Page!</h1>
    </div>
  );
};

common.getInitialProps = async (ctx: { pathname: any }) => {
  const pathname = ctx.pathname;

  return { pathname };
};

export default common;
