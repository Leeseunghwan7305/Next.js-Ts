import { useRouter } from "next/router";
import React from "react";

const ThisIsBlog = () => {
  let router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  return <div>여기는 /blog/~ 가 들어갈곳이야</div>;
};

export default ThisIsBlog;
