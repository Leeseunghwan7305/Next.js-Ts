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
