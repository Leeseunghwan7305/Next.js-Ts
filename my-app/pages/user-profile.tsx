import { GetServerSideProps, NextPage } from "next/types";
import React from "react";
interface userProps {
  username: string;
}
const UserProfilePage: NextPage<userProps> = ({ username }) => {
  return <h1>{username}</h1>;
};

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      username: "Max",
    },
  };
};
//콘텍스트 객체에 접근할 수 있는 데이터 종류가 다르고
//함수가 실행되는 시점,타이밍이 다르다는 점이 큰 차이이다.
