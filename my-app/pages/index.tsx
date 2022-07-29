import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummyData";
import styles from "../styles/Home.module.css";
import { IDummyEvent } from "../types";

const Home: NextPage = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
};

export default Home;
