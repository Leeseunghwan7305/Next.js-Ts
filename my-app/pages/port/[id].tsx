import { useRouter } from "next/router";
import React from "react";

const ThisIsId = () => {
  let router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  return <div>`여기는 port페이지안에 동적 페이지야</div>;
};

export default ThisIsId;
