import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import fs from "fs/promises"; //서버쪽 임폴트는 제거한다.
// getStaticProps 도 제거 한다.
import path from "path"; //경로 구축할떄 씀
import { getProducts } from "../utils/getProducts";
export interface IProduct {
  id: string;
  title: string;
  description: string;
}
interface HomePageProps {
  products: IProduct[];
}
const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  console.log("redender");

  let data = await getProducts();
  if (!data) {
    //데이터 자체가 없을떄
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    //패칭했는데 데이터가 없을떄
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //10초마다 재생성
  };
}
//개발 서버는 revalidate가 있어도 항상 최신 데이터다.
export default Home;
