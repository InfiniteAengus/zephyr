import { useParams } from "@tanstack/react-router";
import { lazy, useEffect, useState } from "react";
import { apiGetProducts } from "../lib/api";
import { IProduct } from "../config/types";
const ProductsView = lazy(async () => import("remote/collection-view"));

const SubCollection = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { subCollectionSlug } = useParams({
    from: "/products/$categorySlug/$subCollectionSlug",
  });

  const handleGetProducts = async () => {
    const result = await apiGetProducts(subCollectionSlug);
    setProducts(result);
  };
  useEffect(() => {
    if (subCollectionSlug) {
      handleGetProducts();
    }
  }, [subCollectionSlug]); //eslint-disable-line

  return (
    <section className="w-full overflow-auto">
      <ProductsView data={products} />
    </section>
  );
};

export default SubCollection;
