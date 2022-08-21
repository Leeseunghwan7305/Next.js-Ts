import React from "react";
import fs from "fs/promises"; //서버쪽 임폴트는 제거한다.
// getStaticProps 도 제거 한다.
import path from "path"; //경로 구축할떄 씀
import { IProduct } from ".";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getProducts } from "../utils/getProducts";
interface ProductDetailPageProps {
  product: IProduct;
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  if (!product) return <div>Loading...</div>;
  //product가 존재하지 않으면 로딩, fallback을 true로 했을 경우
  //필요한 코드 "blocking" 으로 한 경우는 필요 없음
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  //paprams context 객체의 프로퍼티 중 하나
  //params는 키-값 쌍이 있는 객체이며 키의 식별자는 동적 경로 세그먼트
  const productId = params?.pid;

  const data = await getProducts();
  const product = data.products.find(
    (product: IProduct) => product.id === productId
  );
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
};
//동적 페이지의 어떤 인스턴스를 생성할지 next js에 알리는 함수
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getProducts();
  const ids = data.product.map((product: IProduct) => product.id);
  const params = ids.map((id: string) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: true, // true,false,"blocking"
  };
};
//동적 페이지의 어떤 인스턴스를 생성할지 nextjs에 알리는 함수
export default ProductDetailPage;
