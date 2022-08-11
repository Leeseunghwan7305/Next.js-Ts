import React from "react";
import fs from "fs/promises"; //서버쪽 임폴트는 제거한다.
// getStaticProps 도 제거 한다.
import path from "path"; //경로 구축할떄 씀
import { IProduct } from ".";
const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
};

export async function getStaticProps(context: IProduct) {
  const { params } = context;

  const productId = params.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as unknown as string);
  const product = data.products.find(
    (product: IProduct) => product.id === productId
  );
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export default ProductDetailPage;
