import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { ICollection } from "../config/types";
import { apiGetCollections } from "../lib/api";
const CategoryView = lazy(async () => import("remote/category-view"));

const MainPage = () => {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const handleGetCollections = async () => {
    const result = await apiGetCollections();
    setCollections(result);
  };
  const transformedData = useMemo(
    () =>
      collections.map((collection) => ({
        name: collection.name,
        subItems:
          collection.categories?.map((subItem) => ({
            slug: subItem.slug,
            name: subItem.name,
            image_url: subItem.image_url,
            link: `/products/${subItem.slug}`,
          })) || [],
      })) || [],
    [collections]
  );

  useEffect(() => {
    handleGetCollections();
  }, []);

  return (
    <section className="w-full overflow-auto ">
      <Suspense>
        <CategoryView data={transformedData} />
      </Suspense>
    </section>
  );
};

export default MainPage;
