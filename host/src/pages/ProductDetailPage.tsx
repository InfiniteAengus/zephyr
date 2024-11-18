import { useParams } from "@tanstack/react-router";
import { lazy, useEffect, useState } from "react";
import { apiGetProduct } from "../lib/api";
import { IProduct } from "../config/types";
const ProductView = lazy(async () => import("remote/detail-view"));

const Product = () => {
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const { subCollectionSlug, productSlug } = useParams({
    from: "/products/$categorySlug/$subCollectionSlug/$productSlug",
  });

  const handleGetProduct = async () => {
    const result = await apiGetProduct(productSlug);
    setProduct(result);
  };

  useEffect(() => {
    if (subCollectionSlug) {
      handleGetProduct();
    }
  }, [subCollectionSlug]); //eslint-disable-line

  return (
    <section className="w-full overflow-auto">
      <ProductView data={product} />
    </section>
  );
};

export default Product;
