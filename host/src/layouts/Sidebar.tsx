import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { apiGetCategories } from "../lib/api";
import { ICategory } from "../config/types";

const Sidebar = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const handleGetCategories = async () => {
    const result = await apiGetCategories();
    setCategories(result);
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <aside className="w-72 h-full border flex-none border-white/5 rounded p-1">
      <div className="h-full overflow-auto p-1">
        <ul className="flex flex-col gap-1.5">
          {categories.length
            ? categories.map((item, i) => {
                return (
                  <Link
                    to={`/products/${item.slug}`}
                    key={i}
                    className={`w-fit u-transition-color hover:text-zinc-200`}
                  >
                    {item.name}
                  </Link>
                );
              })
            : Array(40)
                .fill(0)
                .map((item, i) => {
                  return (
                    <div
                      key={item + i}
                      className="h-[14px] animate-lazy"
                      style={{ width: Math.random() * 40 + 60 + "px" }}
                    ></div>
                  );
                })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
