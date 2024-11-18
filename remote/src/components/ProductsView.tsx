import { Link } from "@tanstack/react-router";
import { IProductView } from "../config/types";

import "../index.css";

const ProductsView = ({ data }: { data: IProductView[] }) => {
  return (
    <div className="w-full flex gap-4 flex-wrap">
      {data.length
        ? data.map((item) => {
            return (
              <div key={item.slug} className="flex flex-wrap gap-2">
                <Link
                  href={item.slug}
                  className="w-32 group cursor-pointer border border-white/5 rounded p-2 flex flex-col gap-2"
                >
                  <img
                    src={item.image_url}
                    className="animate-lazy w-full aspect-square mx-auto mb-1 grayscale brightness-50 group-hover:grayscale-0 transition-all duration-300 group-hover:brightness-100"
                  />
                  <div className="text-sm leading-tight ">{item.name}</div>
                  <div className="text-base leading-tight font-medium text-zinc-200 text-right">${item.price}</div>
                </Link>
              </div>
            );
          })
        : Array(20)
            .fill(0)
            .map((item, i) => {
              return (
                <div key={item + i} className="flex flex-wrap gap-2">
                  <div className="w-32 group cursor-pointer border border-white/5 rounded p-2 flex flex-col gap-2">
                    <div className="animate-lazy w-full aspect-square mx-auto mb-1" />
                    <div className="animate-lazy w-full h-4"></div>
                    <div className="animate-lazy h-4 w-16"></div>
                    <div className="animate-lazy h-5 w-10 ml-auto"></div>
                  </div>
                </div>
              );
            })}
    </div>
  );
};

export default ProductsView;
