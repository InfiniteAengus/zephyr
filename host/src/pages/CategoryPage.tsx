import { useParams } from "@tanstack/react-router";
import { lazy, useEffect, useMemo, useState } from "react";
import { apiGetCategory } from "../lib/api";
import { ICategory } from "../config/types";
// @ts-ignore
const CategoryView = lazy(async () => import("remote/category-view"));

const Category = () => {
  const [category, setCategory] = useState<ICategory | undefined>(undefined);
  const { categorySlug } = useParams({
    from: "/products/$categorySlug",
  });
  const transformedData = useMemo(
    () =>
      category?.subcollections?.map((collection) => ({
        name: collection.name,
        subItems:
          collection?.subcategories?.map((subItem) => ({
            slug: subItem.slug,
            name: subItem.name,
            image_url: subItem.image_url,
            link: `/products/${collection.category_slug}/${subItem.slug}`,
          })) || [],
      })) || [],
    [category]
  );

  const handleGetCategory = async () => {
    const result = await apiGetCategory(categorySlug);
    setCategory(result);
  };
  useEffect(() => {
    if (categorySlug) {
      handleGetCategory();
    }
  }, [categorySlug]); //eslint-disable-line

  return (
    <section className="w-full overflow-auto">
      <CategoryView data={transformedData} />
    </section>
  );
};

export default Category;
