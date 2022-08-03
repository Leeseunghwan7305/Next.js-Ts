import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import fs from "fs/promises"; //서버쪽 임폴트는 제거한다.
// getStaticProps 도 제거 한다.
import path from "path"; //경로 구축할떄 씀
interface IProduct {
  products: [
    {
      id: string;
      title: string;
    }
  ];
}
const Home = (props: IProduct) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
}

export default Home;
