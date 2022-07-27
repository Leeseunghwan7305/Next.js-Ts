import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { getFeaturedEvents } from "../dummyData";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default Home;
